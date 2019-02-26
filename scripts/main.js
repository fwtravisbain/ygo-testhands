var myCard1 = document.getElementById('card1');
var myCard1 = document.getElementById('card2');
var myCard1 = document.getElementById('card3');
var myCard1 = document.getElementById('card4');
var myCard1 = document.getElementById('card5');
var myNewHandButton = document.querySelecter('button');


myCard1.innerHTML = 'empty1';
myCard2.innerHTML = 'empty2';
myCard3.innerHTML = 'empty3';
myCard4.innerHTML = 'empty4';
myCard5.innerHTML = 'empty5';

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