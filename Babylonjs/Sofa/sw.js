// Register a service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // Registration failed
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// Install event
self.addEventListener('install', function(event) {
    console.log('ServiceWorker installed');
});

// Activate event
self.addEventListener('activate', function(event) {
    console.log('ServiceWorker activated');
});

// Fetch event
self.addEventListener('fetch', function(event) {
    console.log('ServiceWorker fetching');
    event.respondWith(fetch(event.request));
});
