exports.config = {
  paths: {
    "public": 'public'
  },
  files: {
    javascripts: {
      defaultExtension: 'js',
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^(bower_components|vendor)/,
        'test/javascripts/test.js': /^test[\\/](?!vendor)/,
        'test/javascripts/test-vendor.js': /^test[\\/]vendor/,
      },
      order: {
        before: [
          'vendor/scripts/bootstrap/tooltip.js',
          'vendor/scripts/bootstrap/transition.js',
          'vendor/scripts/bootstrap/affix.js',
          'vendor/scripts/bootstrap/alert.js',
          'vendor/scripts/bootstrap/button.js',
          'vendor/scripts/bootstrap/carousel.js',
          'vendor/scripts/bootstrap/collapse.js',
          'vendor/scripts/bootstrap/dropdown.js',
          'vendor/scripts/bootstrap/modal.js',
          'vendor/scripts/bootstrap/popover.js',
          'vendor/scripts/bootstrap/scrollspy.js',
          'vendor/scripts/bootstrap/tab.js'
        ],
        after: [
          'test/vendor/scripts/test-helper.js'
        ]
      }
    },
    stylesheets: {
      defaultExtension: 'less',
      joinTo: {
        'stylesheets/app.css': /^(?!test)/,
        'test/stylesheets/test.css': /^test/
      },
      order: {
        before: [
          'vendor/styles/bootstrap/bootstrap.less'
        ],
        after: [
          'vendor/styles/helpers.css'
        ]
      }
    },
    templates: {
      defaultExtension: 'hbs',
      joinTo: 'javascripts/app.js'
    }
  },
  framework: 'backbone',
  server: {
    path: '../server/index.js'
  }
};