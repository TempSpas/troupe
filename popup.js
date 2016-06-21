/* "Borrowed from the bookmarklet on the GTmetrix website" */

// chrome.tabs.getSelected(null, function(tab)
// {
// 	var checkPageButton = document.getElementById('checkPage');
// 	checkPageButton.addEventListener('click', function()
// 	{
// 		chrome.tabs.getSelected(null, function(tab)
// 		{
// 			d = document;

// 			var f = d.createElement('form');
// 			f.action = 'http://gtmetrix.com/analyze.html?bm';
// 			f.method = 'post';

// 			var i = d.createElement('input');
// 			i.type = 'hidden';
// 			i.name = 'url';
// 			i.value = tab.url;
// 			f.appendChild(i);
// 			d.body.appendChild(f);
// 			f.submit();
// 		});
// 	}, false);
// }, false);

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
