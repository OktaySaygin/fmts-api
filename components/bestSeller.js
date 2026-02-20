const axios = require('axios');
const cheerio = require('cheerio');
const { HttpsProxyAgent } = require('https-proxy-agent');
const fs = require('fs');
const path = require('path');
const { fetchProxies } = require("../api/fetchProxies");

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
};

const bestSellerUrl = 'https://www.amazon.com/Best-Sellers/zgbs';

const proxyList = fs.readFileSync(path.join(__dirname, '../api/proxy.txt'), 'utf-8')
    .split('\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);

const getRandomProxy = () => {
    const randomIndex = Math.floor(Math.random() * proxyList.length);
    return proxyList[randomIndex];
};

const MAX_RETRIES = 10;

const bestSeller = async () => {
    try {
        let data = null;
        let attempt = 0;

        while (attempt < MAX_RETRIES) {
            const myProxy = await fetchProxies();
            console.log("myProxy: ", myProxy);
            console.log(`Deneme ${attempt + 1}/${MAX_RETRIES} — Proxy: ${myProxy}`);
            const agent = new HttpsProxyAgent(`http://${myProxy.host}:${myProxy.port}`);
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 50000);

            try {
                const response = await axios.get(bestSellerUrl, {
                    headers: headers,
                    httpsAgent: agent,
                    signal: controller.signal,
                });
                clearTimeout(timeoutId);
                data = response.data;
                break;
            } catch (err) {
                clearTimeout(timeoutId);
                attempt++;
                const reason = err.code === 'ERR_CANCELED' ? 'Timeout (5s)' : err.message;
                console.error(`Proxy Hatası (${myProxy}): ${reason} — Yeni proxy deneniyor...`);
                if (attempt >= MAX_RETRIES) {
                    throw new Error(`${MAX_RETRIES} denemede de bağlanılamadı.`);
                }
            }
        }

        const $ = cheerio.load(data);
        const products = [];

        $('.a-carousel-card').each((index, element) => {
            const title = $(element).find('.p13n-sc-truncate-desktop-type2').text().trim()
                || $(element).find('._cDEzb_p13n-sc-css-line-clamp-3_g3dy1').text().trim();
            const rawLink = $(element).find('a.a-link-normal').first().attr('href') || '';
            const link = rawLink.startsWith('http') ? rawLink : `https://www.amazon.com${rawLink}`;
            const image = $(element).find('img').first().attr('src') || null;
            const price = $(element).find('.p13n-sc-price').text().trim() || null;
            const rating = $(element).find('.a-icon-alt').first().text().trim() || null;
            const asin = rawLink.match(/\/dp\/([A-Z0-9]{10})/)?.[1] || null;

            if (title) {
                products.push({
                    rank: index + 1,
                    asin,
                    title,
                    price,
                    rating,
                    image,
                    link,
                });
            }
        });

        return products;

    } catch (error) {
        console.error("Genel Hata:", error.message);
        return [];
    }
}

module.exports = { bestSeller };
