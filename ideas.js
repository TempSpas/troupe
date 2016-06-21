window.location.href

/* Parse HTML */
$.get(window.location.href, function(page) {
	$(page).find('a[href]').each(function() {
		console.debug(this.href);
	});
});

