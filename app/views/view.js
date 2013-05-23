require('lib/view_helper');

// Base class for all views
module.exports = Backbone.View.extend({

    initialize: function(){
        _.bindAll(this, "render");
    },

    template: function(){},
    getRenderData: function(){},

    render: function(){
        this.$el.html(this.template(this.getRenderData()));
        this.afterRender();
        return this;
    },

    afterRender: function(){},

    close: function(){
        this.remove();
        this.unbind();
        if (this.onClose){
            this.onClose();
        }
    }

});
