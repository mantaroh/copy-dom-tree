chrome.runtime.onInstalled.addListener(function () {
	chrome.contextMenus.create(
		{
			id: "COPYDOM",
			title: "選択した範囲の HTML コードをコピーする",
			type: "normal",
			contexts: ['selection']
		}
	);
});
chrome.contextMenus.onClicked.addListener(function (item, tab) {
	"use strict";
	if (item.menuItemId == "COPYDOM") {
		chrome.scripting.executeScript({
			target: { tabId: tab.id, allFrames: true },
			files: ['./copyHTML.js'],
		});
	}
});

