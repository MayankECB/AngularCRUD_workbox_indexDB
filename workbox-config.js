module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{txt,ico,html,js,css}"
  ],
  "swDest": "dist\\sw.js",
  runtimeCaching: [{
    urlPattern: /http:\/\/localhost:5555\/products/,
    handler: 'NetworkOnly',
    method: 'POST',
    options: {
      // Configure background sync.
      backgroundSync: {
        name: 'product-bgsync-queue',
        options: {
          maxRetentionTime: 24 * 60 * 60,
        },
      },
    },
  }, {
    urlPattern: /http:\/\/localhost:5555\/products/,
    handler: 'NetworkOnly',
    method: 'PUT',
    options: {
      // Configure background sync.
      backgroundSync: {
        name: 'product-bgsync-queue',
        options: {
          maxRetentionTime: 24 * 60 * 60,
        },
      },
    },
  }, {
    urlPattern: /http:\/\/localhost:5555\/products/,
    handler: 'NetworkOnly',
    method: 'DELETE',
    options: {
      // Configure background sync.
      backgroundSync: {
        name: 'product-bgsync-queue',
        options: {
          maxRetentionTime: 24 * 60 * 60,
        },
      },
    },
  }]
};
