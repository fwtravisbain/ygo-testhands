var myCard1 = document.querySelector('card1');
var myCard2 = document.querySelector('card2');
var myCard3 = document.querySelector('card3');
var myCard4 = document.querySelector('card4');
var myCard5 = document.querySelector('card5');
var myNewHandButton = document.querySelecter('button');


myCard1.innerHTML = 'empty1';
document.getElementById("card2").innerHTML = 'empty';
myCard3.textContent = 'empty';
myCard4.textContent = 'empty';
myCard5.textContent = 'empty';

//Draw a new hand
function drawNewHand()
{
	/*var myNumber = prompt('Please enter a number.');
	localStorage.setItem('number', myName);
	myHeading.textContent = 'Your number is, ' + myNumber;*/
	
	myCard1.textContent = 'Card 1';
	myCard2.textContent = 'Card 2';
	myCard3.textContent = 'Card 3';
	myCard4.textContent = 'Card 4';
	myCard5.textContent = 'Card 5';
}

myNewHandButton.onclick = function()
{
	drawNewHand();
}