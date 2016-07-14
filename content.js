
// Highlight all instances of the actor's name on the page
$("body").highlight("George Clooney");

// Need to implement the display of the tooltip, so we use this code
$(document).ready(function() {
	Tipped.create('.highlight', function(element)
	{
		var person = $('.highlight').html();
		var personToSearch = $(person).text($(person).html()); // Not sure if it will work

		var id = theMovieDb.search.getPerson({"query":person}, successCB, errorCB);

		return {
			title: person,
			// content: "content blah"
			content: id
		};
	}, {
		skin: 'light'
	});
});
