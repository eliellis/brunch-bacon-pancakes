// Application bootstrapper.
Application = {
    initialize: function() {

        var HomeView = require('views/home_view');
        this.HomeView = HomeView;

        // Instantiate a new view and show it with application.AppView.showView(new View())
        // This keeps the zombies away.
        // Of course, you can edit app_view.js to your liking, and you don't even have to use it.
        // Just make sure if you're using it, to extend your views off-of ./view.js.
        var AppView = require('views/app_view');
        this.AppView = new AppView();

        var Router = require('lib/router');
        this.router   = new Router();

        if (typeof Object.freeze === 'function') Object.freeze(this);

    }
};

module.exports = Application;
