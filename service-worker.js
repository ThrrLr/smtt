const CACHE = "smtt-v1";
const FILES = ["./","./index.html","./style.css","./app.js","./manifest.webmanifest","./icons/icon.svg","./icons/logo-smtt.svg"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES))));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
