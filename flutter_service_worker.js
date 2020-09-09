'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d6e1bd9859314ed6ebad6c830d0ee88b",
".git/config": "a9bb58590fa056c79be5e7fdbedcc4ba",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "5bb18acfd1345f4b2dd93fe152a0dc8c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b74f128a3be6c303582cf0c1e03d7878",
".git/logs/refs/heads/master": "b74f128a3be6c303582cf0c1e03d7878",
".git/logs/refs/remotes/origin/master": "61620dccafa2f5856e61939d9a619b7c",
".git/objects/04/2554da64c5874c86bddcd2c2e6a815b060e324": "953e0754921a7195c433a12e1fac51a6",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/76e706862b2b977d5a7500da7ab37dc1471a16": "981630717835b3da81cd1fca5272f836",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/4ef9da6080cd2d1d4c5b6dae27edffa1be78e0": "f560f6ed799dca7d8e94e046abab163e",
".git/objects/2f/d25785153141a00f62a5a4ea78748ba2c41484": "d1fa6e65d519a04b8b63d870a26ed539",
".git/objects/30/6f55d8f6a6f5e0690586d6c5e9a8412197c186": "05d17bbf3cc833ea6e5d5c6275f6514c",
".git/objects/4c/26e1fbae57bbf6c9806b524a52e68e0b80ccc0": "c7e1ece2155e7b1347a4e95fe38f1231",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/52/71567647689b889e296e43403cb85473d0f534": "005eb0976a2927b00313c9ab1858b1ad",
".git/objects/54/9b60282bc9959be936f34e1ef1d76c3f81825b": "97b675746a3bb0297435f357502e3486",
".git/objects/5b/4f36ff33f6aefd59707cc2cf3f278d0852f861": "7bdaf9f1864b38218a9fe8040936f592",
".git/objects/5e/47387ed22c921fe7beb0c0e1d0cb106cea63bf": "6ed810b607d9d98fe527ccb637068f74",
".git/objects/75/b921a3899b61da44529edcb118634ca3b6a8db": "d53e777fefe72eb266243a606b5199fc",
".git/objects/80/c0a82809454de638c1243bb0aa337c210d934c": "0ec2f9061db458c2678b6b61c04c3228",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f217136bfa690b5477a20ad21dedc21f084f3d": "9097f4052a83e2fc0b40220af916a2c4",
".git/objects/8f/ba199ca67e543f20f2ca625b3530e4a77adf9d": "32436b2f1a16c10369f3ab4329c4cd01",
".git/objects/93/bf02bd7cf12ad813e5008bf3bc7c447deba8e4": "41fa0fc57f04562cdd89ae2e3a9f9f39",
".git/objects/9f/1d7bb59c0cc78fb8c391c97e22c7dd61eb6c4f": "fd6431c228b1c7b4c3b6732cdf87ffbb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/628f595ea956e5ecb8fddaed011a18c0b6b49c": "6afc0292019252054ed20ef55fc4bac7",
".git/objects/c4/1dbb665f4a371043425ab0672feacb4c5a2de2": "10428fa808c344887c39f0f944407231",
".git/objects/c7/ae3743939076f3dec9a0ea8a6cc6b8e7b364eb": "2ed15b80f884e7aa12f1878bc6a383c0",
".git/objects/ca/4a11e10490c559d659200f400f926e3b7090c4": "0e6371c67fcc81a0abac7d873d7242bd",
".git/objects/d0/afb1196a3a0af3c9407f02e500c818bf4b901b": "5f0bf1044bc41d2496fca9866a7a9c25",
".git/objects/d5/7689fa0636f8e1674568d4dca4690edefe2d7b": "d314c448cbcbaa494bbecf83019e5583",
".git/objects/d9/3200002ed2efd02025aa80f11c4c765e78a463": "da50d550196ae59d65f758e33f53e747",
".git/objects/e1/fa07406cda051873fa1a06bf4dfad7c5e7aa54": "b743ac660692e5659a285ae7e4539b68",
".git/objects/eb/9afe20393237d51484d15e978e7925efdb6575": "fbebedf3c1033ae6bac7e54fc1aa055e",
".git/objects/f3/375fbb2288473c980dd0ff1a192ee8d5b22000": "6a210f9ce2896d8fdc0899a951a302bc",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "781f475713f55108243e2b3f47832da1",
".git/refs/remotes/origin/master": "781f475713f55108243e2b3f47832da1",
"assets/AssetManifest.json": "7369a23f55e0ca10a099b2b8e9e03ca3",
"assets/assets/facebook.png": "5f97d6d67b29f3a51bfea41e14862d56",
"assets/assets/github.png": "df40a8954c93c95d3d93a7979d14b76f",
"assets/assets/IconsApp.ttf": "3b1a9d03ee6deba7795c9130e81c0ee0",
"assets/assets/linkedin.png": "c1f224fdf02d312b57f3451054625576",
"assets/assets/mail.png": "4b5fe1b9a04417cf7310d5b4bd8879cb",
"assets/assets/profilepic.jpeg": "c97e8112a138aaf3ebbd642fd708e2ca",
"assets/assets/RahulPansariresume.pdf": "06a6564d548681334c6a3b4bf5a8964b",
"assets/assets/rp.png": "53dfc2c1469aa113c3e22592499deb2f",
"assets/FontManifest.json": "662d574567f83933d489b0dadc9fbb63",
"assets/fonts/IconsApp.ttf": "3b1a9d03ee6deba7795c9130e81c0ee0",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "2dbd20ec7df7ae60c10eed9f9f066955",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/rp.png": "53dfc2c1469aa113c3e22592499deb2f",
"index.html": "225a5779084c15eaa1bc00677e94f5ff",
"/": "225a5779084c15eaa1bc00677e94f5ff",
"main.dart.js": "f4af276540b1d185ae2b84e83d71d5f2",
"manifest.json": "59192a605cf2a9a3488ea07c416a8064"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
