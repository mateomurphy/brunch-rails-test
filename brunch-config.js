module.exports = {
  // See http://brunch.io for documentation.
  paths: {
    public: 'public/assets',
    watched: [
      'app/assets',
      'lib/assets',
      'vendor/assets'
    ]
  },

  files: {
    javascripts: {joinTo: '/application.js'},
    stylesheets: {joinTo: '/application.css'},
    templates: {joinTo: '/application.js'}
  },

  modules: {
    autoRequire: {
      'application.js': ['application']
    },

    nameCleaner: function(path) {
      rx = /^.*\/assets\/\w*\/(.*)\./g
      arr = rx.exec(path);
      return arr ? arr[1] : path
    }
  },

  conventions: {
    // TODO fonts would need to be added here
    assets: /images[\\/]/
  },

  plugins: {
    //fingerprint: {
    //  manifest: 'public/assets/manifest.json',
    //  hashLength: 64,
    //  srcBasePath: 'public/assets/',
    //  destBasePath: 'public/assets/',
    //  autoReplaceAndHash: true,
    //  autoClearOldFiles: true,
    //  alwaysRun: true   // this is just for testing
    //},
    hashbrunch: {
      assetFolder: "app/assets/images"
    }
  }
}
