
//Add a click handler to the javascript logo. The first time it is clicked after the page 
// loads, display to the console: "You have clicked this logo for the first time."



//The second and subsequent clicks, display "You have clicked the logo again."



//Create this without using any global variables.


(function() {
	var elem = document.querySelector('#logo');

	var clicked = false;

	elem.addEventListener('click', function() {
		if(!clicked) {
			console.log('this is the first time youve clicked on this')
			clicked = true;
		} else {
			console.log('You have already clicked on this');
		}
	})	
})();


