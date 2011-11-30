var _ = require('common/util');

_.extend(exports, {
	':load': function() {
		console.log('View was loaded');
		var view = this;

		setTimeout(function() {
			//view.get('imageView').resource('A');
			view.get('imageLogo').resource('B');
		}, 500);
	},

	':keypress': function(key) {
		console.log('Key press: ' + key);
	}
});