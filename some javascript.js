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


var cards = [
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

var cardsInPlay = [];

var checkMatch = function(){
	if (cardsInPlay.length === 2);
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert ("You found a match!");
		} else {
			alert ("Sorry, try again.");
	}
};

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2)
		checkMatch();
		//cardsInPlay[]; - MISTAKE DO NOT KNOW WHY I PACED HERE GO THROUGH INSTRUCTIONS ONCE WORKING
		//console.log("User flipped " + cards[cardId].rank); NOT NEEDED ???
};




//Following two lines no longer needed - was just to show how functions are called using set arguments
/*flipCard(0);
flipCard(2);*/

var newSet = function(){
	var originalState = document.getElementById('game-board').cloneNode();
	document.getElementById('game-board').replaceWith(originalState);
};

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute ('data-id', i);
		cardElement.addEventListener ('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	var button = document.getElementById('reset');
	button.addEventListener('click', newSet);
}

//need to use MATH.rnd as another for

createBoard();

/*var reset = function(){};
	ABOVE IS INITIAL WHICH BECAME - HAVE NOT TESTED
	NEXT FOUR IS WHAT WORKED BUT DID NOT REMOVE PreVIOUS BOARD
var newSet = function(){
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', newSet);
createBoard();
}

put lines 114 & 115 here then simply call createboard function?

var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
}
var button = document.getElementById('reset');
button.addEventListener('click', newSet);*/

/*var resetBackImg = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		resetBackImg();
};*/
/*var originalState = function(){
	$("#game-board").clone();
	$("#game-board").replaceWith(originalState.clone());
}*/

//$('#regTitle').empty().append(newcontent);


/*var originalState = function() {
	var newBoard = $("#game-board").clone();
	$("#game-board").empty().append(newBoard);
	//$("#game-board").remove(cardElement);
	//$("#game-board").replaceWith(newBoard);
	//originalState();
};*/

//var newSet = function(){
//$(selector).html(function(index,currentcontent))
//ATTEMPT WITH JQUERY

	/*var originalState = function(){
		var newBoard = $("#game-board").remove();
		$("#game-board").clone();
	//$("#game-board").clone();
		$("#game-board").replaceWith(newBoard);
		var button = document.getElementById('reset');
		button.addEventListener('click', newBoard);
};*/

	//LETS TRY SOMETHING DIFFERENT

			//$("#game-board").replaceWith(originalState);
			//newSet();
		//originalState();

	//var originalState = function() {

		//$("#game-board").empty().append(newBoard);

	//originalState();
	//};

	//newSet();
	//originalState();
//};
	//NEED TO DELETE PREVIOUS CARDS OR REFLIP THEM TO BACK IMAGE
	/*var originalState = function(){
		$("#game-board").clone();
		$("#game-board").replaceWith(originalState.clone());
		createBoard();
	}*/

	/*var resetBackImg = function(){
		for (var i = 0; i < cards.length; i++) {
			var cardElement = document.createElement('img');
			cardElement.setAttribute('src', 'images/back.png');

			//resetBackImg();
	};*/
	//resetBackImg();*/
	//var cardsInPlay = [];

	//checkMatch();
	//createBoard();
	//checkMatch();
	//newSet();


//newSet();

/*var button = document.getElementById('reset');
button.addEventListener('click', newSet);*/

//lines 53-57 where for learning purposes
/*var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards [2];
cardsInPlay.push(cardTwo);*/




//checkMatch(); THIS WAS CAUSING ISSUES AS WE CALLED IT WITHINFLIPCARD FUNCTION-NO NEED TO CALL IT AGAIN

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
