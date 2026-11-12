const CACHE = "milekaki-v13";
const ASSETS = ["./", "index.html", "style.css", "engine_core.js", "app.js", "manifest.json", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("message", e => {
  const d = e.data || {};
  if (d.type !== "cap-alert") return;
  e.waitUntil(self.registration.showNotification(d.title || "MileKaki", { body: d.body || "", icon: "icons/icon-192.png" }));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  if (url.pathname.indexOf("/mcc/") === 0 || url.pathname.indexOf("/vendor/") === 0) return;
  // Stale-while-revalidate: instant offline answer, refresh cache in the background.
  e.respondWith(caches.open(CACHE).then(c => c.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit || c.match("index.html"));
    return hit || net;
  })));
});
