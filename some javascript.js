/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//Up to line 43 this was code written - not following instructions just the logic of psuedocode

if (cardOne === cardFour){
	alert ("You found a match!");
} else{
	alert ("Sorry, try again");
}

if (cardOne === cardThree){
	alert ("You found a match!");
} else{
	alert ("Sorry, try again");
}

if (cardOne === cardTwo){
	alert ("You found a match!");
} else{
	alert ("Sorry, try again");
}

if (cardTwo === cardThree){
	alert ("You found a match!");
} else{
	alert ("Sorry, try again");
}

if (cardTwo === cardFour){
	alert ("You found a match!");
} else{
	alert ("Sorry, try again");
}

if (cardThree === cardFour){
	alert ("You found a match!");
} else{
	alert ("Sorry, try again");
}
*/
//var cards = ['queen', 'queen', 'king', 'king'];
var cards = [];
var cardsInPlay = [
	{rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
	{rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
	{rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
},
];

var checkMatch = function()
	{if (cardsInPlay[0] === cardsInPlay[1])
		{alert('You found a match!');}
	}
	else{
		{alert('Sorry, try again!');}
	}
};

var flipCard = function(cardId){
	if (cardsInPlay.length === 2){
		checkMatch();
		//cardsInPlay[];
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
	}
};

flipCard(0);
flipCard(2);


//lines 53-57 where for learning purposes
/*var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards [2];
cardsInPlay.push(cardTwo);*/







checkMatch();

/*var createCards = function (){
	'use strict';
	var newBoard = document.getElementById("game-board").innerHTML = "Game Board";
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("div");
  	cardElehhment.className = 'card';
		cardElement.setAttribute('card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
  	newBoard.appendChild(cardElement);
	}
};

createCards();*/




/*var newBoard = document.getElementById ('game-board');
newBoard = 4
for (var i in newBoard) {    (array[i];)}
	document.createElement ('div') = "newCard"*/
