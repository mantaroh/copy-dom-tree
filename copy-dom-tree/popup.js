(function() {
	"use strict";
	document.getElementById("copyHTMLButton").addEventListener("click", function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.scripting.executeScript({
				target: { tabId: tabs[0].id, allFrames: true },
				files: ['./copyHTML.js'],
			});
		});
		window.close();
	});
})(); 

