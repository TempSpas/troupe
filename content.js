
// Highlight all instances of the actor's name on the page
$("body").highlight("George Clooney");

var id;

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
		
		var json = theMovieDb.search.getPerson({"query":person}, function (data) {
			data = JSON.parse(data);
			if(data.hasOwnProperty("results") && data.results.length > 0) {
				console.log("HELLO JOSE!");
				// console.log("HELLO JOSE!" + data);
			}
		}, errorCB);

		return {
			title: person,
			content: "content blah"
			//content: personToSearch
		};
	}, {
		skin: 'light'
	});
});
