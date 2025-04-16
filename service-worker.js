self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('abrime-store').then(function(cache) {
      return cache.addAll([
        '/abrime.html',
        '/styles.css',
        '/script.js',
        '/yes_page.html',
        '/yes_style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});