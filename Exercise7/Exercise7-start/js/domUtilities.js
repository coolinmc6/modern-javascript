
// - We start our first module almost like we are defining the actual "MAINAPP"
// - It is an anonymous function that we pass in either 'MAINAPP' or a blank object if
// MAINAPP does not exist.
// - the argument MAINAPP || {} is called 'app' in our anonymous function and we return it at the end
// - Because we want to define this as a sub-module, we use 'sub' and set it equal to app.dom 
// which equals app.dom || {}
// - So now, we have all these private functions and a sub module with nothing on it. We can't use '$'
// outside of this sub-module UNTIL we create the public methods section. That's where we make our
// functions properties of our sub-module


var MAINAPP = (function(app) {

	// We want to define this as a sub-module
	// - the below pattern sets 'sub' equal to app.dom (which is we want to call our sub-module) which
	// will equal app.dom (if it exists) OR an empty object

	var sub = app.dom = app.dom || {};

	// Dependencies
	var ustr = app.string;

	var doc = document,
	    $ = function(domElement) {
	        if (!singleSelector(domElement)) {
	            try {
	                return doc.querySelectorAll(domElement);
	            } catch(e) {
	                console.log(e);
	            }
	        } else {
	            if (domElement.indexOf('#') === 0) {
	                try {
	                    return [(doc.getElementById(domElement.substring(1,domElement.length)))];
	                } catch(e) {
	                    console.log(e);
	                }
	            } else if (domElement.indexOf('.') === 0){
	                try {
	                    return doc.getElementsByClassName(domElement.substring(1,domElement.length));
	                } catch(e) {
	                    console.log(e);
	                }
	            } else {
	                try {
	                    return doc.getElementsByTagName(domElement);
	                } catch(e) {
	                    console.log(e);
	                }
	            }
	        }
	    },

	    singleSelector = function(str) {
	        var arr;
	        
	        arr = str.split(" ");
	        if (arr.length === 1 && ustr.numChar(str, "#") <= 1 && ustr.numChar(str, ".") <= 1) {
	            return true;
	        } else {   
	            return false;
	        } 
	    },
	    assignEvent = function(de, event, funct) {
	        //use for loop since node list is not an array
	        try {
	            for (let i = 0; i < de.length; i++) {
	                de[i].addEventListener(event, funct);
	            }
	        } catch(e) {
	            console.log(e);
	        }
	        
	    },
	    data = function(de, term) {
	        var arr = [];
	        if (de.length > 1) {
	            for (let i = 0; i < de.length; i++) {
	                arr[i] = de[i].getAttribute('data-' + term);
	            }
	        } else {
	            return de[0].getAttribute('data-' + term);
	        }
	    },
	    addClass = function(de, cls) {
	        for (let i = 0; i < de.length; i++) {
	            if (de[i].classList) {
	                de[i].classList.add(cls);
	            } else {
	                de[i].className += ' ' + cls;
	            }
	        }
	    },
	    removeClass = function(de, cls) {
	        for (let i = 0; i < de.length; i++) {
	            if (de[i].classList) {
	                de[i].classList.remove(cls);
	            } else {
	                de[i].className.replace(/\bcls\b/,'');
	            }
	        }
	    };

	    // Public
	    sub.$ = $;
	    sub.assignEvent = assignEvent;
	    sub.data = data;
	    sub.addClass = addClass;
	    sub.removeClass = removeClass;

	return app;
})(MAINAPP || {});