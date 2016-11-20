/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

/*if (cardOne == cardFour){
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
cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

/*var gameBoard = document.getElementById('game-board');*/

/*var createCards = function (){
	'use strict';*/

var gameBoard = document.getElementById("game-board");/*.innerHTML = "Game Board";*/

for (var i = 0; i < cards.length; i++){
    createCards();
}

function createCards(){
  var card = document.createElement('div');
  card.className = "card";
  card.setAttribute('data-card', cards[i]);
  gameBoard.appendChild(card);
  card.addEventListner('click', isTwoCards);
}

function isTwoCards(){
  if(this.getAttribute('data-card') == "king"){
    this.innerHTML = "<div class = 'king'></div>";
}

  else{
    this.innerHTML = "<div class = 'queen'></div>";
}

/*puts king or queen into cardsInPlay array*/
  cardsInPlay.push(this.getAttribute('data-card'));

/*checks position of cards - face up or down*/
  if (cardsInPlay.length === 2){

/*reset cards if have a match*/
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

/*self explanitory - checks for equality*/
function isMatch(x){
  if (x[0] !== x[1]){
    setWait(function(){alert("Wrong, Try Again!");
    x = document.getElementByClassName ('card');
    x[0].innerHTML = " ";
    x[1].innerHTML = " ";
    x[2].innerHTML = " ";
    x[3].innerHTML = " ";}, 500);
}

  else{
    setWait(function(){alert("Correct, Keep Going!");
    x = document.getElementByClassName ('card');
    x[0].innerHTML = " ";
    x[1].innerHTML = " ";
    x[2].innerHTML = " ";
    x[3].innerHTML = " ";}, 500);
  }
}

    /*var cardElement = document.createElement("div");
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
