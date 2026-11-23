// Offline cache: the app shell and the 10 page templates.
const CACHE = "boya-canlandir-v2";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png",
  ...Array.from({ length: 10 }, (_, i) => `sayfalar/sahne-${String(i + 1).padStart(2, "0")}.png`), "sayfalar/viko-boyama-kitabi.pdf"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok && new URL(e.request.url).origin === location.origin) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request)));
});
