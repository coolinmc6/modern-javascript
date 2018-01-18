
var content = document.querySelector('#content');

content.innerHTML = "President " + pres.fullName() + " was president number " + pres.order + " of the United States of America.";

var properties = Object.getOwnPropertyNames(pres);
console.log(properties);

for(var prop in pres) {
	console.log('*******************************************************')
	console.log('Property: ', prop);
	console.log('Property type: ', typeof(pres[prop])); 
}