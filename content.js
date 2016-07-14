
// Highlight all instances of the actor's name on the page
$("body").highlight("George Clooney");

var id;

// Callback functions for responses
function successCB(data) {
	console.log("Success callback: " + data);

	data = JSON.parse(data);
	if(data.hasOwnProperty("results") && data.results.length > 0)
	{
        if(data.results.hasOwnProperty("id") && data.results.id.length > 0) {
        	id = data.results.id;
        	console.log(id);
        }
        // for (var i = data.results.length - 1; i >= 0; i--)
        // {
        //     if(data.results[i]["title"].length < 15 && data.results[i]["backdrop_path"] != "")
        //     {
        //     	var item = { title: "", img: ""};
        //     	item.title = data.results[i]["title"].toUpperCase().split("");
        //     	item.img = data.results[i]["backdrop_path"];
        //     	this.movies.push(item);

        //     }
        // };
        this.updateStage();
    } else {
        this.error("No Data");
	}
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

		var json = theMovieDb.search.getPerson({"query":person}, successCB, errorCB);
		// var obj = JSON.parse(json);

		return {
			title: person,
			content: "content blah"
			//content: personToSearch
		};
	}, {
		skin: 'light'
	});
});
