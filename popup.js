//use select document by id (.value)
//put together url
//fetch request

// const form = document.getElementById('form');
// const keyword = document.getElementById('keyword').value;
// console.log(keyword);
// let newURL = "https://www.google.com/search?q=" + keyword;


let language;
let engine;
const form = document.getElementById('form');

function saveSettings(lang, eng) {
	chrome.storage.sync.set({ 'language': lang, 'eng': eng })
}

function getSettings() {
	chrome.storage.sync.get(['language'], function (result) {
		if (!result) return
		document.getElementById('language').value = result['language']
	})
	chrome.storage.sync.get(['eng'], function (result) {
		if (!result) return
		document.getElementById('engine').value = result['eng']
	})
}

getSettings();

form.addEventListener('submit', function (event) {

	const keyword = document.getElementById('keyword').value;
	language = document.getElementById('language').value
	engine = document.getElementById('engine').value
	const googleURL = 'https://www.google.com/search?q='
	const mdnURL = 'https://developer.mozilla.org/en-US/search?q='
	let engineChoice;


	if (engine === 'google') {
		engineChoice = googleURL;
	}
	else if (engine === 'mdn') {
		engineChoice = mdnURL;
	}

	let newURL = engineChoice + keyword + "+" + language;

	saveSettings(language, engine)
	event.preventDefault();
	chrome.tabs.create({ url: newURL });
})

document.getElementById("engine").onchange = function () {
	engine = document.getElementById('engine').value
	saveSettings(language, engine)
};

document.getElementById("language").onchange = function () {
	language = document.getElementById('language').value
	saveSettings(language, engine)
};
