//Register Service Worker
if('serviceWorker' in navigator){

    navigator.serviceWorker.register('/sw.js').then(function(registration){
        console.log('Succeeded', registration);

    }).catch(function(error){
        console.log('Failed', error);

    });

} else {
    console.log("serviceWorkers are not supported by this Browser");
}



