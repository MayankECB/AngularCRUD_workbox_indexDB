/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "3rdpartylicenses.txt",
    "revision": "927031ce0f6f40361b87c52824f923b3"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "index.html",
    "revision": "229b9d70232c10f8faaa6f5bb3c35683"
  },
  {
    "url": "main.224b1ab30d4392c9cc09.js",
    "revision": "5f771695321f4590a1073631623eabe5"
  },
  {
    "url": "polyfills.b5f9ecca1a25f91304b8.js",
    "revision": "65eede0cbd94e3b40f1a795aa28166cc"
  },
  {
    "url": "runtime.a66f828dca56eeb90e02.js",
    "revision": "f2c1a0d5e113c332e6bbe7887eb378b2"
  },
  {
    "url": "styles.4134736bab5fc6298622.css",
    "revision": "5217f9c2d3402a6dc46c2cc554a86d45"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueueName', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
  /http:\/\/localhost:5555\/products/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);
workbox.routing.registerRoute(
  /http:\/\/localhost:5555\/products/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'DELETE'
);
workbox.routing.registerRoute(
  /http:\/\/localhost:5555\/products/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'PUT'
);