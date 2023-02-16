const GHPATH = 'https://player11en.github.io/Babylonjs/Sofa';
var APP_PREFIX = 'Sofa'
var VERSION = 'version_01'
const OFFLINE_URL = 'offline.html';
const CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
    `${GHPATH}/index.html`,
    `${GHPATH}/offline.html`,
    `${GHPATH}/sw.js`,
    `${GHPATH}/images/favicon.ico`,
    `${GHPATH}/images/Texture.png`,
    `${GHPATH}/models/Sofa.glb`,
]

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('Installing cache : ' + CACHE_NAME);
            return cache.addAll(URLS)
        })
    )
})

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            var cacheWhitelist = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX)
            })
            cacheWhitelist.push(CACHE_NAME);
            return Promise.all(keyList.map(function (key, i) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    console.log('Deleting cache : ' + keyList[i]);
                    return caches.delete(keyList[i])
                }
            }))
        })
    )
})

self.addEventListener('fetch', function (e) {
    console.log('Fetch request : ' + e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (request) {
            if (request) {
                console.log('Responding with cache : ' + e.request.url);
                return request
            } else {
                console.log('File is not cached, fetching : ' + e.request.url);
                return fetch(e.request)
            }
        })
    )
})