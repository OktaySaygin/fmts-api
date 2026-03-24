const express = require('express');
const router = express.Router();
const pendingLinks = require('../api/pendingLinks');

const APP_STORE_URL = 'https://apps.apple.com/tr/app/show-tv/id434829188';
const TESTFLIGHT_URL = 'https://testflight.apple.com/v1/app/434829188?build=198853786';

const buildDeepLink = (path, id) => {
    if (id) return `nmshowtv://${path}/${id}`;
    return `nmshowtv://${path}`;
};

// Uygulama açılışında pending deeplink kontrolü
router.get('/claim-deeplink', (req, res) => {
    console.log("req:", req);
    const ip = req.ip || req.connection.remoteAddress;
    const deeplink = pendingLinks.claim(ip);
    res.json({ deeplink: deeplink || null });
});

const renderRedirectPage = (deepLinkUrl) => `
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show TV</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #1a1a2e;
            color: #fff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container { text-align: center; padding: 2rem; max-width: 360px; width: 100%; }
        .logo { font-size: 2.5rem; font-weight: 800; color: #e50914; margin-bottom: 1rem; letter-spacing: 2px; }
        .spinner {
            width: 48px; height: 48px;
            border: 4px solid rgba(255,255,255,0.1);
            border-top-color: #e50914;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin: 1.5rem auto;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .status { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 0.5rem; line-height: 1.5; }
        .sub { color: rgba(255,255,255,0.4); font-size: 0.82rem; margin-bottom: 1.5rem; line-height: 1.6; }
        .btn {
            display: block; background: #e50914; color: #fff;
            text-decoration: none; padding: 0.9rem 2rem;
            border-radius: 10px; font-weight: 700; font-size: 1rem;
            margin-top: 0.75rem; cursor: pointer; border: none; width: 100%;
        }
        .btn-outline {
            display: block; background: transparent; color: rgba(255,255,255,0.5);
            text-decoration: none; padding: 0.7rem 2rem;
            border-radius: 10px; font-weight: 500; font-size: 0.85rem;
            margin-top: 0.75rem; cursor: pointer;
            border: 1px solid rgba(255,255,255,0.15); width: 100%;
        }
        .check { font-size: 2.5rem; margin: 1rem 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">SHOW TV</div>

        <div id="viewLoading">
            <div class="spinner"></div>
            <p class="status">Uygulama açılıyor...</p>
        </div>

        <div id="viewInstall" style="display:none;">
            <p class="status">Uygulama yüklü değil.</p>
            <p class="sub">
                Aşağıdaki butona tıkla — içerik bilgisi kopyalanacak
                ve TestFlight'a yönlendirileceksin.<br><br>
                Uygulamayı kurduktan sonra ilgili içerik otomatik açılır.
            </p>
            <button class="btn" onclick="installAndCopy()">
                TestFlight'tan İndir
            </button>
            <a class="btn-outline" href="${APP_STORE_URL}">
                App Store'da Ara
            </a>
        </div>

        <div id="viewCopied" style="display:none;">
            <div class="check">✅</div>
            <p class="status">TestFlight'a yönlendiriliyorsunuz...</p>
            <p class="sub">Uygulamayı kurduktan sonra ilgili içerik otomatik açılacak.</p>
        </div>
    </div>

    <script>
        const deepLink = '${deepLinkUrl}';
        const testflightUrl = '${TESTFLIGHT_URL}';

        function show(id) {
            ['viewLoading', 'viewInstall', 'viewCopied'].forEach(v => {
                document.getElementById(v).style.display = v === id ? 'block' : 'none';
            });
        }

        async function installAndCopy() {
            try {
                await navigator.clipboard.writeText(deepLink);
            } catch {
                const el = document.createElement('textarea');
                el.value = deepLink;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
            }
            show('viewCopied');
            setTimeout(() => { window.location.href = testflightUrl; }, 800);
        }

        window.location.href = deepLink;

        const timer = setTimeout(() => { show('viewInstall'); }, 2500);

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) clearTimeout(timer);
        });
    </script>
</body>
</html>
`;

const handleDeepLinkRoute = (path, paramName) => (req, res) => {
    const id = paramName ? req.params[paramName] : null;
    const deeplink = buildDeepLink(path, id);
    const ip = req.ip || req.connection.remoteAddress;
    pendingLinks.save(ip, deeplink);
    res.send(renderRedirectPage(deeplink));
};

router.get('/video/:id',   handleDeepLinkRoute('video', 'id'));
router.get('/news/:id',    handleDeepLinkRoute('news', 'id'));
router.get('/dizi/:id',    handleDeepLinkRoute('dizi', 'id'));
router.get('/program/:id', handleDeepLinkRoute('program', 'id'));
router.get('/canliyayin',  handleDeepLinkRoute('canliyayin', null));

module.exports = router;
