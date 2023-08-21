(function() {
	"use strict";
	function startDownload(){
		if(document.getSelection().anchorNode == null)return;
		const anchorNode = document.getSelection().anchorNode;
		let selectedEl = 
			anchorNode.nodeType != 1
				? document.getSelection().anchorNode.parentElement.parentElement
				: document.getSelection().anchorNode.parentElement;
		const html = selectedEl.outerHTML;
		
		navigator.clipboard.writeText(html);
	}
	
	startDownload();
})();
