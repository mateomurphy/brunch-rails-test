module.exports = {
  // See http://brunch.io for documentation.
  paths: {
    // this values eases serving assets, but results in static
    // assets being moved directly to public
    public: 'public/assets',
    watched: ['app/assets']
  },

  files: {
    javascripts: {joinTo: '/application.js'},
    stylesheets: {joinTo: '/application.css'},
    templates: {joinTo: '/application.js'}
  },

  conventions: {
    // TODO fonts would need to be added here
    assets: /images[\\/]/
  },

  server: {
    publicPath: '/public'
  }
}
