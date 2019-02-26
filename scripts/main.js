function Card(name)
{
	this.name = name;
	this.drawn = false;
}

var promise = Promise.resolve();
var interval = 200;
var requestUrl = "https://db.ygoprodeck.com/api/v2/cardinfo.php?name=";


//test deck
myDeck = [];
drawnCards = [];
//myDeck.push(new Card("Gazelle"));
//myDeck.push(new Card("Foxy"));
//myDeck.push(new Card("Spinny"));
//myDeck.push(new Card("Circle"));
//myDeck.push(new Card("Debug"));

//read in ydk
var ydkDeck = new Array;
var ydkMainDeck = new Array;
var deckJSON = new Array;
$.get('Burning Abyss.ydk', function(data){
        ydkDeck = data.split('\n');
        //console.log(ydkDeck);
        
      //Get only the maindeck cards
        var i = 2;
        console.log("deck size: " + ydkDeck.length);
        while(ydkDeck[i] != "" && ydkDeck[i] != "#extra" && ydkDeck[i] != "!side" && i < ydkDeck.length)
        {
        	//console.log(ydkDeck[i]);
        	ydkMainDeck.push(ydkDeck[i]);
        	i++;
        }
        
        //generate json url
//        var deckJSON = ydkMainDeck.map(function(id) 
//        {
//            return $.getJSON(requestUrl + id)
//        });
        
        ydkMainDeck.forEach(function(id)
        {
        	//console.log("url: " + requestUrl + id);
        	
//        	$.getJSON(requestUrl + id, function(data)
//        	{
//        		myDeck.push(new Card(data.name));
//        		
//        		console.log(data.name);
//        	});
        	
        	//avoid rate limiting
        	
        	
        	promise = promise.then(function () 
        	{
        		console.log("url: " + requestUrl + id);
        	    return new Promise(function (resolve) 
        	    {
        	    	setTimeout(resolve, 3000);
        	    });
        	});
        	
        });
        
        //add each card to deck
//        deckJSON.forEach(function(element)
//        {
//        	console.log(element.name);
//        	myDeck.push(new Card(element.name));
//        });
        
        
    }, 'text');

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
	
	var deckSize = myDeck.length;
	
	for(var i = 0; i<5; i++)
	{
		var running = true;
		
		while(running)
		{
			//get a random card under deck size
			var randomNumber = Math.floor(Math.random() * deckSize);
			
			if(!myDeck[randomNumber].drawn)
			{
				drawnCards.push(randomNumber);
				myDeck[randomNumber].drawn = true;
				running = false;
			}
		}
	}
	
	myCard1.innerHTML = myDeck[drawnCards[0]].name;
	myCard2.innerHTML = myDeck[drawnCards[1]].name;
	myCard3.innerHTML = myDeck[drawnCards[2]].name;
	myCard4.innerHTML = myDeck[drawnCards[3]].name;
	myCard5.innerHTML = myDeck[drawnCards[4]].name;
}

myNewHandButton.onclick = function()
{
	//reset drawn cards back to the deck
	for(var i = 0; i<drawnCards.length; i++)
	{
		myDeck[drawnCards[i]].drawn = false;
	}
	
	drawnCards = [];
	
	//draw new hand
	drawNewHand();
}