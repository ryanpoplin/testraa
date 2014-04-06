'use strict';

(function($) {

	// Views...

	var DefaultView = Backbone.View.extend({
		template: _.template($('#default-view-template').html()),
		render: function() {
			$(this.el).html(this.template);
		},
		initialize: function() {
			console.log('DefaultView init...');
		}
	});

	// Router...

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'defaultRoute'
		},
		defaultRoute: function() {
			var defaultView = new DefaultView({
				el: 'body'
			});
			defaultView.render();
		}
	});

	$(function() {

		new AppRouter();
		Backbone.history.start();

	});	

}(jQuery));