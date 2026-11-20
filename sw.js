// Service worker mínimo: deixa o catálogo instalável e abrir offline.
// Os jogos (outros repositórios/caminhos) são buscados direto da rede.
const CACHE = "mqzgames-catalogo-v2";
const SHELL = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

const CATALOG_PATHS = new Set(SHELL.map((file) => new URL(file, self.registration.scope).pathname));

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith("mqzgames-catalogo-") && k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin || !CATALOG_PATHS.has(url.pathname)) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          e.waitUntil(caches.open(CACHE).then((cache) => cache.put(e.request, copy)));
        }
        return res;
      })
      .catch(() => caches.open(CACHE).then(async (cache) => (await cache.match(e.request, { ignoreSearch: true })) || (await cache.match("./index.html")) || Response.error()))
  );
});
