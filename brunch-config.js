module.exports = {
  // See http://brunch.io for documentation.
  paths: {
    public: 'public/assets',
    watched: [
      'app/assets/javascripts',
      'app/assets/stylesheets',
      'app/assets/images'
    ]
  },

  files: {
    javascripts: {joinTo: '/application.js'},
    stylesheets: {joinTo: '/application.css'},
    templates: {joinTo: '/application.js'}
  },

  modules: {
    autoRequire: {
      'application.js': ['application.js']
    },

    nameCleaner: function(path) {
      // clean requires
      return path.replace(/^app\/assets\/javascripts\//, '');
    }
  },

  conventions: {
    // TODO fonts would need to be added here
    assets: /images[\\/]/
  },
}
