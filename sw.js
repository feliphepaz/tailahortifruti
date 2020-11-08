const cacheName = "v1";

const resourcesToPrecache = [
  "/tailahortifruti/",
  "/tailahortifruti/index.html",
  "/tailahortifruti/sobre.html",
  "/tailahortifruti/setores.html",
  "/tailahortifruti/local.html",
  "/tailahortifruti/contato.html",
  "/tailahortifruti/frutas.html",
  "/tailahortifruti/verduras.html",
  "/tailahortifruti/legumes.html",
  "/tailahortifruti/frios-e-congelados.html",
  "/tailahortifruti/diversos.html",
  "/tailahortifruti/css/normalize.css",
  "/tailahortifruti/css/reset.css",
  "/tailahortifruti/css/style.css",
  "/tailahortifruti/css/sobre.css",
  "/tailahortifruti/css/setores.css",
  "/tailahortifruti/css/local.css",
  "/tailahortifruti/css/contato.css",
  "/tailahortifruti/css/produtos.css",
  "/tailahortifruti/js/main.js",
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
