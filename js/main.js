var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{	
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var totalScore = 0;

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert('You found a match!');
		totalScore += 1;
		updateScore();
	}
	else {
		alert('Sorry, try again.');
	}
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

var createBoard = function(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();

var reset = function(){
	cardsInPlay = [];
	var allCards = document.querySelectorAll('img');
	for(var i = 0; i < allCards.length; i++){
		allCards[i].setAttribute('src', 'images/back.png');
	}
}
var button = document.querySelector('button');
button.addEventListener('click', reset);

var updateScore = function(){
	var scoreBoard = document.getElementById('score');
	scoreBoard.textContent = totalScore;
}
