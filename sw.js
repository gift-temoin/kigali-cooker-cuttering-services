const CACHE_NAME = 'kigali-cooker-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/components.css',
    '/css/pages.css',
    '/js/app.js',
    '/js/data.js',
    '/js/i18n.js',
    'https://cdn-icons-png.flaticon.com/512/3448/3448099.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
