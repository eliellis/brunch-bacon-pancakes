var application = require('application');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'home'
    },

    home: function() {
        var homeView = new application.HomeView();
        application.AppView.showView(homeView);
    }
});
