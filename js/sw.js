
var CACHE_NAME = 'restaurantCacheV1';
var REQUIRED_FILES =[
            'http://localhost:8000/',
            'http://localhost:8000/css/styles.css',
            'http://localhost:8000/index.html',
            'http://localhost:8000/restaurant.html',
            'http://localhost:8000/img/1.jpg',
            'http://localhost:8000/img/2.jpg',
            'http://localhost:8000/img/3.jpg',
            'http://localhost:8000/img/4.jpg',
            'http://localhost:8000/img/5.jpg',
            'http://localhost:8000/img/6.jpg',
            'http://localhost:8000/img/7.jpg',
            'http://localhost:8000/img/8.jpg',
            'http://localhost:8000/img/9.jpg',
            'http://localhost:8000/img/10.jpg',
            'http://localhost:8000/js/main.js',
            'http://localhost:8000/js/dbhelper.js',
            'http://localhost:8000/data/restaurants.json'

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
      .then(function() {
        // At this point everything has been cached
        return self.skipWaiting();
      })
  );
});



//Return cache requests

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }

        // Not in cache - return the result from the live server
        // `fetch` is essentially a "fallback"
        return fetch(event.request);
      }
    )
  );
});



//Register Service Worker

if('serviceWorker' in navigator){

    navigator.serviceWorker.register('js/sw.js').then(function(registration){
        console.log('Succeeded', registration);

    }).catch(function(error){
        console.log('Failed', error);

    });


} else {
    console.log("serviceWorkers are not supported by this Browser");
}





 