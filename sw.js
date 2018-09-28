//REQUIRED FILES
var CACHE_NAME = 'restaurantCacheV12';
var REQUIRED_FILES =[
            '/',
            'js/dbhelper.js',
            'css/styles.css',
            'index.html',
            'restaurant.html',
            'img/1.jpg',
            'img/2.jpg',
            'img/3.jpg',
            'img/4.jpg',
            'img/5.jpg',
            'img/6.jpg',
            'img/7.jpg',
            'img/8.jpg',
            'img/9.jpg',
            'img/10.jpg',
            'js/main.js',
            'sw.js',
            'manifest.js',
            'registersw.js'

];



//Install Service worker
self.addEventListener('install', function(event) {
  // Perform install step:  loading each required file into cache
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Add all offline dependencies to the cache
        return cache.addAll(REQUIRED_FILES);
      })
  );
});

self.addEventListener('activate',function(event){
  event.waitUntil(
    //Remove old cache
    caches.delete('restaurantCacheV11')
    );
});

//Return cache requests
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
        // Cache hit - return the response from the cached version
        if(response) {
          return response;
        } else {
        // Not in cache - return the result from the live server
        // `fetch` is essentially a "fallback"
        return fetch(event.request);
      }
      })
  );
});





 