require.config({
	paths: {
		jquery: 'jquery-2.2.4'
	}
});
require(['jquery'], function($) {
	alert($().jquery);
})