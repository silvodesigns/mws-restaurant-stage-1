if('serviceWorker' in navigator){

    navigator.serviceWorker.register('js/sw.js').then(function(registration){
        console.log('Succeeded', registration);

    }).catch(function(error){
        console.log('Failed', error);

    });

} else {
    console.log("serviceWorkers are not supported by this Browser");
}

 self.addEventListener('install', function(event){

    event.waitUntil(
        caches.open('restaurantCacheV1').then(function(cache){

          return cache.addAll([
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



            ]);

         })

        )
    
});



 