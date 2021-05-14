self.addEventListener('install', event => {
    console.log('ServiceWorker installing');

    // Aktiverar ServiceWorker direkt
    self.skipWaiting()
})

self.addEventListener('activate', event => {
    console.log('ServiceWorker activating');

    // Denna fetchar den direkt
    event.waitUntil(clients.claim())
})

self.addEventListener('fetch', event => {
    event.respondWith(onFetch(event))
})

async function onFetch(event) {

if(navigator.onLine) {
    let response = await fetch(event.request)

    let cache = await caches.open('dynamic-cache')

    cache.put(event.request, response.clone())

    return response
}
else {
    return await caches.match(event.request)
    }
}
