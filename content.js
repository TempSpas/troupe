// Let's suppose we've implemented the code that grabs the names on the page
// puts them in an array and gets rid of duplicates
// it would result in something like:
var names = ["George Clooney","Brad Pitt","Matt Damon", "Don Cheadle", "David Pressman",
			 "Jerry Weintraub", "Martin Sheen", "Nicole Kidman", "Robert Rodriguez"]
var person = []

// Highlight all instances of the actor's name on the page
for( var j = 0; j< names.length; j++){
	var newTag = {element: 'span'};
	newTag['className'] = names[j];
	$("body").highlight(names[j]);
	$("body").highlight(names[j],newTag);
	//$("body").names(names[j]);
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

var nameCount = 0;
for( var k = 0; k< names.length; k++){
	names[k]= '.' + names[k].replace(/ /g,'.');
}
for( var l = 0; l< names.length; l++){
    person[l] = $(names[l]).html();
}

$(document).ready(function() {
	var n;
    for( n = 0; n < names.length; n++)
    {
    	(function(count) {
			theMovieDb.search.getPerson({"query":person[count]}, function (data)
			{
				data = JSON.parse(data);
				if(data.hasOwnProperty("results") && data.results.length > 0)
				{
					// for (var i = data.results.length - 1; i >= 0; i--)
					// {
					if(data.results[0]["name"].length < 20 && data.results[0]["profile_path"] != "")
					{
						var item = {name: "", id: "", img: "", known_for:""};
						item.name = data.results[0]["name"];
						item.img = data.results[0]["profile_path"];
						item.id = data.results[0]["id"];
						// item.known_for = data.results[0]["known_for"][0]["original_title"];
						known_for1JSON = data.results[0]["known_for"][0];
						known_for2JSON = data.results[0]["known_for"][1];
						known_for3JSON = data.results[0]["known_for"][2];

						var knownFor1 = {title: "", img: "", desc: ""};
						var knownFor2 = {title: "", img: "", desc: ""};
						var knownFor3 = {title: "", img: "", desc: ""};

						// if(known_for.hasOwnProperty("original_title")) {
						if(known_for1JSON.hasOwnProperty("original_title")) {
							// item.known_for = known_for.original_title //[0]["original_title"];
							knownFor1.title = known_for1JSON.original_title
						}

						if(known_for2JSON.hasOwnProperty("original_title")) {
							// item.known_for = known_for.original_title
							knownFor2.title = known_for2JSON.original_title
						}

						if(known_for3JSON.hasOwnProperty("original_title")) {
							knownFor3.title = known_for3JSON.original_title
						}

						id = item.id;
					
						Tipped.create(names[count], function(element)
						{
							var image = document.createElement("IMG");
							// img.src = "http://i.imgur.com/v1VCmRZ.jpg";
							return {
								title: item.name,
								// title: $('#image').html(img) + item.name,
								// content: item.id + "<hr>" + "hello jose!"
								content: knownFor1.title + "<hr>" + knownFor2.title + "<hr>" + knownFor3.title
							};
						}, {
							skin: 'white'
							// skin: 'light'
						});
					}
					//}
				}
			}, errorCB);
		})(n);
	}
});



