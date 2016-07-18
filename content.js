
// Highlight all instances of the actor's name on the page
$("body").highlight("George Clooney");

var id;

// Callback functions for responses
function successCB(data) {
	console.log("Success callback: " + data);
};

// Error callback function
function errorCB(data) {
	console.log("Error callback: " + data);
	// https://www.themoviedb.org/documentation/api/status-codes
};

$(document).ready(function() {
	Tipped.create('.highlight', function(element)
	{
		var person = $('.highlight').html();
		var id = "";
		
		var json = theMovieDb.search.getPerson({"query":person}, function (data) {
			data = JSON.parse(data);
			if(data.hasOwnProperty("results") && data.results.length > 0) {
				console.log("HELLO JOSE!");

				for (var i = data.results.length - 1; i >= 0; i--) {
					if(data.results[i]["name"].length < 15) {
						// console.log("ID: ")
						var item = {name: "", id: "", img: ""};
						item.name = data.results[i][name];
						item.img = data.results[i]["profile_path"];
						item.id = data.results[i]["id"];


						console.log("Test print id: " + item.id);
						console.log("Image: " + item.img);
					}
				}

				// Neither of these work:
				// console.log("ID: " + data.results[2]);
				// console.log("ID: " + data.results["id"]);
			}
		}.bind(this), errorCB);

		return {
			title: person,
			content: "content blah"
			//content: personToSearch
		};
	}, {
		skin: 'light'
	});
});
