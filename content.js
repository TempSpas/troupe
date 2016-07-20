//Lets suppose we've implemented the code that grabs the names on the page
//puts them in an array and gets rid of duplicates
//it would result in something like:
var names = ["George Clooney","Brad Pitt","Matt Damon", "Don Cheadle", "David Pressman",
			 "Jerry Weintraub", "Martin Sheen", "Nicole Kidman", "Robert Rodriguez"]
var person = []

// Highlight all instances of the actor's name on the page
for( var j = 0; j < names.length; j++)
{
	var newTag = { element: 'span' };
	newTag['className'] = names[j];
	$("body").highlight(names[j]);
	$("body").highlight(names[j], newTag);
//	$("body").names(names[j]);
}
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
var nameCount = 0;
for( var k = 0; k< names.length; k++) {
	names[k]= '.' + names[k].replace(/ /g,'.');
}

for( var l = 0; l< names.length; l++) {
    person[l] = $(names[l]).html();
}

$(document).ready(function hello(count)
{
	if(Number.isInteger(count) && count < person.length) 
	{
	    count1 = count++;
		hello(count);
	}
	else {
		if(Number.isInteger(count)) {
			return;
		}
		else {
			count = 0;
			hello(count);
		}
	}
	theMovieDb.search.getPerson({"query":person[count]}, function (data)
	{
		data = JSON.parse(data);
		if(data.hasOwnProperty("results") && data.results.length > 0)
		{
			for (var i = data.results.length - 1; i >= 0; i--) {
				if(data.results[i]["name"].length < 20 && data.results[i]["profile_path"] != "")
				{
					var item = {name: "", id: "", img: ""};
					item.name = data.results[i]["name"];
					item.img = data.results[i]["profile_path"];
					item.id = data.results[i]["id"];
					id = item.id;

					Tipped.create(names[count], function(element)
					{
						return {
							title: item.name,
							content: item.id
						};
					}, {
						skin: 'light'
					});
				}
			}
		}
		return;
	}, errorCB);		
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

