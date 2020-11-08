self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("fox-store").then(function (cache) {
      return cache.addAll([
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
      ]);
    }),
  );
});

self.addEventListener("fetch", function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    }),
  );
});
