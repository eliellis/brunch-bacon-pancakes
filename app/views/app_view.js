module.exports = function AppView(){

	return {
		showView: function showView(view) {
			if (this.currentView){
				this.currentView.close();
			}

			this.currentView = view;
			this.currentView.render();
			$("body").html(this.currentView.el);
		}
	};

};