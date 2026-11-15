/**
 * Service Worker for Achaari Bliss PWA
 * Strategy: Stale-While-Revalidate for app shell & static assets
 * Enables 100% offline browsing of catalog and shopping cart
 */

const CACHE_NAME = 'achaari-bliss-v2.0';
const STATIC_ASSETS = [
  './',
  './index.html',
  './assets/css/styles.css',
  './assets/js/products.js',
  './assets/js/app.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app shell & static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Clearing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback for offline if not in cache
        return cachedResponse || new Response('Offline - check your connection', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });

      return cachedResponse || fetchPromise;
    })
  );
});
