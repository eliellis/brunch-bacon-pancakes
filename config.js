exports.config = {
  paths: {
    "public": 'public'
  },
  files: {
    javascripts: {
      defaultExtension: 'js',
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^vendor/
      },
      order: {
        before:
        [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery-1.9.1.js',
          'vendor/scripts/lodash.underscore.js',
          'vendor/scripts/backbone-1.0.0.js',
          'vendor/scripts/backbone-mediator.js',
          'vendor/scripts/bootstrap/bootstrap-tooltip.js',
          'vendor/scripts/bootstrap/bootstrap-transition.js',
          'vendor/scripts/bootstrap/bootstrap-affix.js',
          'vendor/scripts/bootstrap/bootstrap-alert.js',
          'vendor/scripts/bootstrap/bootstrap-button.js',
          'vendor/scripts/bootstrap/bootstrap-carousel.js',
          'vendor/scripts/bootstrap/bootstrap-collapse.js',
          'vendor/scripts/bootstrap/bootstrap-dropdown.js',
          'vendor/scripts/bootstrap/bootstrap-modal.js',
          'vendor/scripts/bootstrap/bootstrap-popover.js',
          'vendor/scripts/bootstrap/bootstrap-scrollspy.js',
          'vendor/scripts/bootstrap/bootstrap-tab.js',
          'vendor/scripts/bootstrap/bootstrap-typeahed.js'
          ]
      }
    },
    stylesheets: {
      defaultExtension: 'less',
      joinTo: 'stylesheets/app.css',
      order: {
        before: ['vendor/styles/bootstrap/bootstrap.less']
      }
    },
    templates: {
      defaultExtension: 'hbs',
      joinTo: 'javascripts/app.js'
    }
  },
  framework: 'backbone',
  plugins: {
    autoReload: {
      disabled: true // set to false to make magic happen
    }
  }
};
