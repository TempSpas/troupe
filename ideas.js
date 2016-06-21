window.location.href

/* Parse HTML */
$.get(window.location.href, function(page) {
	$(page).find('a[href]').each(function() {
		console.debug(this.href);
	});
});


var elements = document.getElementsByTagName('*');

for(var i = 0; i < elements.length; i++)
{
	var element = elements[i];

	for(var j = 0; j < element.childNodes.length; j++)
	{
		var node = element.childNodes[j];

		if(node.nodeType === 3) {
			var text = node.nodeValue;
			var replacedText = text.replace(/Trump/gi, 'Jared');

			if(replacedText !== text) {
				element.replaceChild(document.createTextNode(replacedText), node);
			}
		}
	}
}


