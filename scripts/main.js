var myCard1 = document.querySelector('card1');
var myCard2 = document.querySelector('card2');
var myCard3 = document.querySelector('card3');
var myCard4 = document.querySelector('card4');
var myCard5 = document.querySelector('card5');
var myNewHandButton = document.querySelecter('button');


myCard1.textConcert = 'empty';
myCard2.textConcert = 'empty';
myCard3.textConcert = 'empty';
myCard4.textConcert = 'empty';
myCard5.textConcert = 'empty';

//Draw a new hand
function drawNewHand()
{
	/*var myNumber = prompt('Please enter a number.');
	localStorage.setItem('number', myName);
	myHeading.textContent = 'Your number is, ' + myNumber;*/
	
	myCard1.textConcert = 'Card 1';
	myCard2.textConcert = 'Card 2';
	myCard3.textConcert = 'Card 3';
	myCard4.textConcert = 'Card 4';
	myCard5.textConcert = 'Card 5';
}

myNewHandButton.onclick = function()
{
	drawNewHand();
}