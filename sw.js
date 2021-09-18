self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('monkei-store').then((cache) => cache.addAll([
      'index.html',
      'index.js',
      'style.css',
      '\images\monkei1.jpg',
      '\images\monkei2.jpg',
      '\images\monkei3.jpg',
      '\images\monkei4.jpg',
      '\images\monkei5.jpg',
      '\images\monkei6.jpg',
      '\images\monkei7.jpg',
      '\images\monkei8.jpg',
      '\images\monkei9.jpg',
      '\images\monkei10.jpg',
      '\images\monkei11.jpg',
      '\images\monkei12.jpg',
      '\images\monkei13.jpg',
      '\images\monkei14.jpg',
      '\images\monkei15.jpg',
      '\images\monkei16.jpg',
      '\images\monkei17.jpg',
      '\images\monkei18.jpg',
      '\images\monkei19.jpg',
      '\images\monkei20.jpg',
      '\images\monkei21.jpg',
      '\images\monkei22.jpg',
      '\images\monkei23.jpg',
      '\images\monkei24.jpg',
      '\images\monkei25.jpg',
      '\images\monkei26.jpg',
      '\images\monkei27.jpg',
      '\images\monkei28.jpg',
      '\images\monkei29.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});