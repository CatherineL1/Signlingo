const CACHE = 'sl-v1';
const FILES = [
  '/',
  '/index.html',
  '/model/model.json',
  '/model/weights.bin'
];
self.addEventListener('install', e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch', e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
