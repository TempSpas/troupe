
// Highlight all instances of the actor's name on the page
$("body").highlight("George Clooney");

// Callback functions for responses
function successCB(data) {
	console.log("Success callback: " + data);
};

function errorCB(data) {
	console.log("Error callback: " + data);
	// https://www.themoviedb.org/documentation/api/status-codes
};

$(document).ready(function() {
	Tipped.create('.highlight', function(element)
	{
		var person = $('.highlight').html();
		//var personToSearch = $('person')[0].outerHTML; // Not sure if it will work

		theMovieDb.search.getPerson({"query":"George%20Clooney"}, successCB, errorCB);

		return {
			title: person,
			content: "content blah"
			//content: personToSearch
		};
	}, {
		skin: 'light'
	});
});
