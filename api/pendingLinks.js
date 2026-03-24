const store = new Map();
const TTL_MS = 10 * 60 * 1000; // 10 dakika

function save(ip, deeplink) {
    store.set(ip, { deeplink, timestamp: Date.now() });
}

function claim(ip) {
    const entry = store.get(ip);
    if (!entry) return null;
    if (Date.now() - entry.timestamp > TTL_MS) {
        store.delete(ip);
        return null;
    }
    store.delete(ip);
    return entry.deeplink;
}

module.exports = { save, claim };
