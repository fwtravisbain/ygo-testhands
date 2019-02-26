var myHeading = document.querySelector('h1');
var myNewHandButton = document.querySelecter('button');

myHeading.textContent = 'Yu-Gi-Oh! Test Hands';

//Draw a new hand
function drawNewHand()
{
	var myNumber = prompt('Please enter a number.');
	localStorage.setItem('number', myName);
	myHeading.textContent = 'Your number is, ' + myNumber;
}

//Initialize
if(!localStorage.getItem('name'))
{
	drawNewHand();
}
else
{
	var storedNumber = localStorage.getItem('number');
	myHeading.textContent = 'Your number is, ' + storedNumber;
}

myNewHandButton.onclick = function()
{
	drawNewHand();
}