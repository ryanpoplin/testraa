(function($) {

	// Quick and Clean...

	'use strict';

	var DefaultView = Backbone.View.extend({
		template: _.template($('#default-view-template').html()),
		render: function() {
			var html = this.template;
			$(this.el).html(html);
		},
		initialize: function() {
			console.log('DefaultView init...');
		}
	});

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'defaultRoute'
		},
		defaultRoute: function() {
			var defaultView = new DefaultView({
				el: '#main'
			});
			defaultView.render();
		}
	});

	$(function() {

		new AppRouter();
		Backbone.history.start();

	});	

}(jQuery));