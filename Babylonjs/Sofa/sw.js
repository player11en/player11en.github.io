// Install event
self.addEventListener('install', function (event) {
    console.log('ServiceWorker installed');
    event.waitUntil(
        caches.open('model-cache')
          .then(function(cache) {
            return cache.addAll([
            '/sw.js',
            '/images/favicon.ico',
            '/models/Sofa.glb'
            ]);
          })
        );
    });

// Activate event
self.addEventListener('activate', function (event) {
    console.log('ServiceWorker activated');
});

// Fetch event
self.addEventListener('fetch', function (event) {
    console.log('ServiceWorker fetching');
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
