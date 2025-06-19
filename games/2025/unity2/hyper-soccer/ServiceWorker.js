const cacheName = "Momo Games-Hyper Soccer-1.0";
const contentToCache = [
    "Build/e694288f8b6c269648f224924be6beee.loader.js",
    "Build/8f00ab80d9e6a72cfd0adcdaefae96b6.framework.js.unityweb",
    "Build/b37ca193df73e7a0626a34d58eec40cb.data.unityweb",
    "Build/516cf8331e8cadc1f155b683e3169cb6.wasm.unityweb",
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