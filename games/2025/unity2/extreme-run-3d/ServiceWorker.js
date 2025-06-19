const cacheName = "GAMEHOX12-Extreme Run 3D";
const contentToCache = [
    "Build/d3471e9356bfdfa5ab8df5d4ce65eca2.loader.js",
    "Build/d4a17295c00678e084b6db2107f9883b.framework.js.unityweb",
    "Build/fe98fc657679733a324c5efb04e83071.data.unityweb",
    "Build/0f8ee024670f41944a9132f01b6d4a9c.wasm.unityweb",
    "TemplateData/style.css"

];

self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');

    e.waitUntil((async function() {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function(e) {
    e.respondWith((async function() {
        let response = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (response) {
            return response;
        }

        response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});