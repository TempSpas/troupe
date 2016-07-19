// Highlight all instances of the actor's name on the page
$("body").highlight("George Clooney");

// Callback functions for responses
function successCB(data) {
	console.log("Success callback: " + data);
};

// Error callback function
function errorCB(data) {
	console.log("Error callback: " + data);
	// https://www.themoviedb.org/documentation/api/status-codes
};

// var person = $('.highlight').html();

// $( ".highlight" ).each(function( i ) {
// 	var person = $(this).html();
// }

$(document).ready(function() {
	$( ".highlight" ).each(function( i ) {
		var person = $(this).html();

		theMovieDb.search.getPerson({"query":person}, function (data)
		{
			data = JSON.parse(data);
			
			if(data.hasOwnProperty("results") && data.results.length > 0)
			{
				console.log("HELLO JOSE!");

				for (var i = data.results.length - 1; i >= 0; i--) {
					if(data.results[i]["name"].length < 15 && data.results[i]["profile_path"] != "")
					{
						// console.log("ID: ")
						var item = {name: "", id: "", img: ""};
						item.name = data.results[i]["name"];
						item.img = data.results[i]["profile_path"];
						item.id = data.results[i]["id"];
						id = item.id;

						// console.log("Test ID: " + id);
						// console.log("Test print id: " + item.id);
						// console.log("Image: " + item.img);
						$(document).ready(function() {
							Tipped.create('.highlight', function(element)
							{
								return {
									title: item.name,
									content: item.id
								};
							}, {
								skin: 'light'
							});
						});
					}
				}
			}
		}.bind(this), errorCB);		
	}

	// theMovieDb.search.getPerson({"query":person}, function (data)
	// {
	// 	data = JSON.parse(data);
		
	// 	if(data.hasOwnProperty("results") && data.results.length > 0)
	// 	{
	// 		console.log("HELLO JOSE!");

	// 		for (var i = data.results.length - 1; i >= 0; i--) {
	// 			if(data.results[i]["name"].length < 15 && data.results[i]["profile_path"] != "")
	// 			{
	// 				// console.log("ID: ")
	// 				var item = {name: "", id: "", img: ""};
	// 				item.name = data.results[i]["name"];
	// 				item.img = data.results[i]["profile_path"];
	// 				item.id = data.results[i]["id"];
	// 				id = item.id;

	// 				// console.log("Test ID: " + id);
	// 				// console.log("Test print id: " + item.id);
	// 				// console.log("Image: " + item.img);
	// 				$(document).ready(function() {
	// 					Tipped.create('.highlight', function(element)
	// 					{
	// 						return {
	// 							title: item.name,
	// 							content: item.id
	// 						};
	// 					}, {
	// 						skin: 'light'
	// 					});
	// 				});
	// 			}
	// 		}
	// 	}
	// }.bind(this), errorCB);
});

