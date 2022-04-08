// const CACHE_NAME = 'cache-1'
// const CACHE_DYNAMIC = 'dynamic-1'
// const CACHE_INMUTABLE = 'inmutable-1'

// const APP_SHELL = ['/', 'index.html', 'css/styles.css', 'img/favico.ico', 'js/app.js', 'img/avs/fl3.png', 'img/avs/fl4.png', 'img/avs/fl5.png', 'img/avs/fl6.png']
// const APP_INMUTABLE = ['https://fonts.googleapis.com/css?family=Quicksand:300,400', 'https://fonts.googleapis.com/css?family=Lato:400,300', 'https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css', 'js/libs/jquery']

// self.addEventListener('install', event => {
//     const CACHE_APP = caches.open(CACHE_NAME).then(cache => {
//         cache.addAll(APP_SHELL)
//     })

//     const CACHEINMUTABLE = caches.open(CACHE_INMUTABLE).then(cache => {
//         cache.addAll(APP_INMUTABLE)
//     })

//     event.waitUntil(Promise.all([CACHE_APP, CACHEINMUTABLE]))
// })

// self.addEventListener('activate', event => {
    
// })

	
var url = window.location.href; //obtenemos todo el url
var pwaLocation = '/repositorioGitHub/sw.js'; //path donde se encuentra el sw en GitHub
 
if(navigator.serviceWorker){
    if(url.includes('localhost')){
        pwaLocation = '/sw.js';
    }
navigator.serviceWorker.register(pwaLocation);
}


