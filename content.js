// var context = document.querySelector("*"); 
// var instance = new Mark(context);
// instance.mark("Trump");

$("body").highlight("Donald Trump");

// This works!
// $(document).ready(function() {
// 	Tipped.create('.highlight', 'Some tooltip text');
// });

// Need to implement the display of the tooltip, so we use this code
$(document).ready(function() {
	Tipped.create('.highlight', function(element)
	{
		var person = $('.highlight').html();
		return {
			title: person,
			content: "content blah"
		};
	}, {
		skin: 'light'
	});
});


// $(document).ready(function() {
// 	Tipped.create('instance', 'Some tooltip text');
// });

// $(document).on('click', '#welcome_message:not(.active)', function(){
//     $(this).addClass('active');
//     $('.popup').show();
//     return false;
// })