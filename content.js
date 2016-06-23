
/* Only works for text enclosed in div tags with class context */
var instance = new Mark(document.querySelector(".context"));
instance.mark("Donald Trump");

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "colors-div":
			var divs = document.querySelectorAll("div");
			if(divs.length === 0) {
				alert("There are no any divs in the page.");
			} else {
				for(var i=0; i&lt;divs.length; i++) {
					// divs[i].style.backgroundColor = message.color;
					var instance = new Mark(document.querySelector(divs[i]));
					instance.mark("Donald Trump");
				}
			}
		break;
	}
});