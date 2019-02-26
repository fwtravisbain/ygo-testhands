function Card(name)
{
	this.name = name;
	this.drawn = false;
}




//test deck
myDeck = [];
myDeck.push(new Card("Gazelle"));
myDeck.push(new Card("Foxy"));
myDeck.push(new Card("Spinny"));
myDeck.push(new Card("Circle"));
myDeck.push(new Card("Debug"));

//read in ydk
var ydkDeck = new Array;
$.get('Burning Abyss.ydk', function(data){
        ydkDeck = data.split('\n');
        //console.log(ydkDeck);
    }, 'text');



//stop iterating when you see #extra !side or a blank line
var i = 0;
//while(ydkDeck[i] != "" && ydkDeck[i] != "#extra" && ydkDeck[i] != "!side" && i < ydkDeck.length)
//{
//	console.log(ydkDeck[i]);
//	i++;
//}



var myCard1 = document.getElementById("card1");
var myCard2 = document.getElementById("card2");
var myCard3 = document.getElementById("card3");
var myCard4 = document.getElementById("card4");
var myCard5 = document.getElementById("card5");
var myNewHandButton = document.getElementById("newhandbutton");


myCard1.innerHTML = "empty";
myCard2.innerHTML = "empty";
myCard3.innerHTML = "empty";
myCard4.innerHTML = "empty";
myCard5.innerHTML = "empty";

//Draw a new hand
function drawNewHand()
{
	/*var myNumber = prompt('Please enter a number.');
	localStorage.setItem('number', myName);
	myHeading.textContent = 'Your number is, ' + myNumber;*/
	
	myCard1.innerHTML = myDeck[0].name;
	myCard2.innerHTML = myDeck[1].name;
	myCard3.innerHTML = myDeck[2].name;
	myCard4.innerHTML = myDeck[3].name;
	myCard5.innerHTML = myDeck[4].name;
	
	myDeck[0].drawn = true;
}

myNewHandButton.onclick = function()
{
	drawNewHand();
}