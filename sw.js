//REQUIRED FILES
var CACHE_NAME = 'restaurantCacheV2';
var REQUIRED_FILES =[
            '/',
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
            'js/dbhelper.js',
            'sw.js',
            'data/restaurants.json'

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

    navigator.serviceWorker.register('sw.js').then(function(registration){
        console.log('Succeeded', registration);

    }).catch(function(error){
        console.log('Failed', error);

    });


} else {
    console.log("serviceWorkers are not supported by this Browser");
}





 