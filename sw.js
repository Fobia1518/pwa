self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('pwa')
            .then(function(cache){
                cache.addAll([
                    '/',
                    '/index.html',
                    '/css/creative.min.css',
                    '/js/creative.min.js',
                    'vendor/bootstrap/js/bootstrap.min.js',
                    'vendor/fontawesome-free/css/all.min.css',
                    'vendor/magnific-popup/magnific-popup.css',
                    'img/portfolio/fullsize/1.jpg',
                    'img/portfolio/fullsize/2.jpg',
                    'img/portfolio/fullsize/3.jpg',
                    'img/portfolio/fullsize/4.jpg',
                    'img/portfolio/fullsize/5.jpg',
                    'img/portfolio/fullsize/6.jpg',
                    'img/portfolio/thumbnails/1.jpg',
                    'img/portfolio/thumbnails/2.jpg',
                    'img/portfolio/thumbnails/3.jpg',
                    'img/portfolio/thumbnails/4.jpg',
                    'img/portfolio/thumbnails/5.jpg',
                    'img/portfolio/thumbnails/6.jpg',
                    'img/bg-masthead.jpg',
                    'vendor/fontawesome-free/webfonts/fa-solid-900.woff',
                    'https://fonts.gstatic.com/s/merriweather/v20/u-4n0qyriQwlOrhSvowK_l521wRZWMf6.woff2 ',
                    'vendor/magnific-popup/jquery.magnific-popup.min.js',
                    'vendor/jquery-easing/jquery.easing.min.js',
                    'vendor/bootstrap/js/bootstrap.bundle.min.js',
                    'vendor/jquery/jquery.min.js',
                    'https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700',
                    'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic'
                ])
            })
    );
    return self.clients.claim();
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
    //Responder ya sea con el objeto en caché o continuar y buscar la url real
    e.respondWith(
      caches.match(e.request)
        .then(res => {
          if (res) {
            //recuperar del cache
            return res
          }
          //recuperar de la petición a la url
          return fetch(e.request)
        })
    )
  })

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
    const cacheWhitelist = ['pwa']
    e.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              //Eliminamos lo que ya no se necesita en cache
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName)
              }
            })
          )
        })
        // Le indica al SW activar el cache actual
        .then(() => self.clients.claim())
    )
  })