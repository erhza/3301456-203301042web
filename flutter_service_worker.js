'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "55ff2b9c1c8a375536e97b7b6f8ba504",
"assets/AssetManifest.json": "9f201bc454b180117ef519f5593091ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "40fe3e2b1c8d2e69345515b2a705f9a8",
"assets/images/%25C3%25A7ayna.jpg": "c010615925bff199c844bdcfbdade911",
"assets/images/%25C3%25A7bozcada.jpg": "67f5fefdffd3e05862e3c4c6dd54fab9",
"assets/images/%25C3%25A7g%25C3%25B6k%25C3%25A7e.jpg": "4fa07a4df7c6d683d1172427fd6e8dcb",
"assets/images/%25C3%25A7troya.jpg": "373d1c16c2fccf2ebcd87a0d9e85a135",
"assets/images/ala.jpg": "6c73f9635da52ae62870e0112726cc35",
"assets/images/an%25C4%25B1tkabir.jpg": "75dc9cfcda9be479434053618782a6c3",
"assets/images/anaekran.jpg": "113585c8e75a3c94bf9dddf83c5a4ac1",
"assets/images/asa.jpg": "cd59993671cc1e791035b23f9872fd5a",
"assets/images/ayasofya.jpg": "915ef953af177ba599c62e4347d06d87",
"assets/images/boztepe.jpg": "b159b798cd687c170b382b6a43f1bb28",
"assets/images/d%25C3%25BCden.jpg": "077e89e58ad057da14e98c9c2a0ef64d",
"assets/images/damlata%25C5%259F.webp": "7b4be53beafc5399951fd98637fc7022",
"assets/images/dhan.jpg": "acf6b2b1252fe58b4e11754e9887e282",
"assets/images/diskender.jpg": "a6edc5fc5a05314e82f3efe3b0d078dd",
"assets/images/divri%25C4%259Fi.jpg": "b9186f52b08c3c083e70e8a71b2a2a0d",
"assets/images/dk%25C3%25B6pr%25C3%25BC.jpg": "57f7229aef13e92c6036e56e166b6584",
"assets/images/dkale.jpg": "cf5230f3a3bd288a7342ccfbcd202cec",
"assets/images/efes.jpg": "fe2d94573e19ee199781cd2420dc6ff5",
"assets/images/galata.jpg": "6338b73c357ba552765f8d1b0102e241",
"assets/images/k%25C4%25B1zkulesi.webp": "06a18307ad2221be993920b2fd118918",
"assets/images/kalei%25C3%25A7i.jpg": "826b7c3e2aeef885209d108bb6472c38",
"assets/images/kapadokya.jpg": "fbe65f6bcb61b361d0b599c38d89d8c2",
"assets/images/kemer.jpg": "02b7fe495dc4d8cbbe92b5ac4b056bd6",
"assets/images/meta.jpg": "12bd2cc23029e6d94f5d560c55b8dc74",
"assets/images/mevlana.jpg": "2ddf9a952ea8715d493fd22ab46e6b25",
"assets/images/oli.jpg": "29329d70f9fb0909b960fece0a330403",
"assets/images/s%25C3%25BCmela.jpg": "cec71107be74a9e6c6eab8f47d6aabf3",
"assets/images/saatk.jpg": "72701f7bd3187f6ad8d8aa30a4799866",
"assets/images/sacami.jpg": "88a1b2d839a03340dd57045cdf4cd6fd",
"assets/images/safranbolu.jpg": "b5d52755af83ee4ed833e1936d6e1222",
"assets/images/side.jpg": "429f2b8ac5576a7e4077e545f50a0213",
"assets/images/ta%25C5%259Fk%25C3%25B6pr%25C3%25BC.jpg": "5520dbde60727d91f614217518a1fc94",
"assets/images/tkale.jpg": "e2577cc5cd1291f2d094bb3d8aba5de4",
"assets/images/topkap%25C4%25B1.jpg": "c08731cfcc07a4722959caa54b4c31e8",
"assets/images/traverten.jpg": "73ac388a83dd1c8eb6f7ba6a38e31125",
"assets/images/ubal%25C4%25B1k.jpg": "1da67663da3ce04d992c1a5fd01c1dfb",
"assets/images/ug%25C3%25B6bek.jpg": "31aa85d3f2879abc4af87038aa51ef24",
"assets/images/uhan.jpg": "ac84358b2354729f32c181cea603f245",
"assets/images/ukale.jpg": "97eb5d05b6c2163a85761853ab97b45f",
"assets/images/uzungol.webp": "9542f8f129221485c61bdee2f69966fc",
"assets/NOTICES": "bdd87585deefb6e04728f796091ef299",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f05ef6a3d45abce91b1cfeba71a709a1",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "1f952c5dc1c1aff2d177be5a9fc0e9ec",
"canvaskit/skwasm.js": "2e9d3b68c4c4b1d4154eaa08598dc048",
"canvaskit/skwasm.wasm": "374033d89d5c38fe6af6bb61a1c8ae13",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eabe355e729c18d6940700453e62dc17",
"/": "eabe355e729c18d6940700453e62dc17",
"main.dart.js": "a8b425a3d238c15a0fb0479a688ac8dd",
"manifest.json": "e03074b1fcebd59b8d7a79b5dd76933c",
"version.json": "23c4471f4cfb6110cff758b24c210c4c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
