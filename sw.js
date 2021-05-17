const staticCache = "site-static";
const assets = [
  "/",
  "/images/",
  "/sw.js",
  "/index.html",
  "/src/App.jsx",
  "/src/index.css",
  "/src/main.jsx",
  "/manifest.json",
  "/manifest.json",
  "/src/components/Dashboard.jsx",
  "/src/components/Home.jsx",
  "/src/components/Login.jsx",
];

//installera service worker
self.addEventListener("install", (evt) => {
  console.log("service worker has been installed");
  evt.waitUntil(
    caches.open(staticCache).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

//aktivera/lyssna aktiverings events
self.addEventListener("activate", (evt) => {
  console.log("service worker has been activated");
});

//fetcha event
self.addEventListener("fetch", (evt) => {
  //   console.log("fetch event", evt);
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
