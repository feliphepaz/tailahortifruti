const cacheName = "v1";

const resourcesToPrecache = [
  "/",
  "/index.html",
  "/sobre.html",
  "/setores.html",
  "/local.html",
  "/contato.html",
  "/frutas.html",
  "/verduras.html",
  "/legumes.html",
  "/frios-e-congelados.html",
  "/diversos.html",
  "/css/normalize.css",
  "/css/reset.css",
  "/css/style.css",
  "/css/sobre.css",
  "/css/setores.css",
  "/css/local.css",
  "/css/contato.css",
  "/css/produtos.css",
  "main.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(resourcesToPrecache)),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cacheResponse) => cacheResponse || fetch(event.request)),
  );
});
