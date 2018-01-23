//Open the json file and then populate learnjs.html with the data from the json file. 
//document.getElementsByTagName()
//document.getElementById()
//innerHTML();

// I would normally just use jQuery to grab the JSON, but here is the code for this assignment

var MAINAPP = (function(app) {
	var jsonObj = {};
	var doc = document;

	// I think this is boilerplate code and not much really changes
	var loadJSON = function(path) {
		var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                jsonObj = JSON.parse(xobj.responseText);
                populateHtml();
            }
        };
        xobj.send(null);
	}

	var populateHtml = function() {
		var items = doc.getElementsByTagName('li');
		doc.getElementsByTagName('h2')[0].innerHTML = jsonObj.heading;
		for (let i = 0; i < items.length; i++) {
			items[i].innerHTML = jsonObj.bullets['b' + (i + 1)];
		}
	}
	loadJSON('data.json');
	app.populateHtml = populateHtml;

	return app;
})(MAINAPP || {});