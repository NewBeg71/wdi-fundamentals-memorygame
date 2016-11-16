/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne == cardFour){
	alert ("You found a match!");
} else;{
	alert ("Sorry, try again");
}

if (cardOne == cardThree){
	alert ("You found a match!");
} else;{
	alert ("Sorry, try again");
}

if (cardOne == cardTwo){
	alert ("You found a match!");
} else;{
	alert ("Sorry, try again");
}

if (cardTwo == cardThree){
	alert ("You found a match!");
} else;{
	alert ("Sorry, try again");
}

if (cardTwo == cardFour){
	alert ("You found a match!");
} else;{
	alert ("Sorry, try again");
}

if (cardThree == cardFour){
	alert ("You found a match!");
} else;{
	alert ("Sorry, try again");
}
*/
var cards = ['queen', 'queen', 'king', 'king'];

var createCards = function (){
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

createCards();




/*var newBoard = document.getElementById ('game-board');
newBoard = 4
for (var i in newBoard) {    (array[i];)}
	document.createElement ('div') = "newCard"*/
