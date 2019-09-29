let suits = ['Hearts', 'Clubs' , 'Diamonds' , 'Spades'],
	values = ['Ace','King','Queen','Jack',
			'Ten','Nine','Eight','Seven','Six',
			'Five','Four','Three','Two'];

let textArea = document.getElementById('text-area'),
	newGameButton = document.getElementById('new-game-button'),
	hitButton = document.getElementById('hit-button'),
	stayButton = document.getElementById('stay-button');

let gameStart = false,
	gameOver = false,
	playerWon = false,
	dealerCards = [],
	playerCards = [],
	dealerScore = 0,
	playerScore = 0,
	deck = [];


hitButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener('click',function() {
	gameStarted = true;
	gameOver = false;
	playerWon = false;

	deck = createDeck();
	shuffleDeck(deck);
	dealerCards = [getNextCard(),getNextCard()];
	playerCards = [getNextCard(),getNextCard()];

	// console.log(deck);
	console.log(dealerCards);
	console.log(playerCards);

	newGameButton.style.display = 'none';
	hitButton.style.display = 'inline';
	stayButton.style.display = 'inline';
	showStatus();
});

hitButton.addEventListener('click',function(){
	playerCards.push(getNextCard());
	checkForEndOfGame();
	showStatus();
});

stayButton.addEventListener('click',function(){
	gameOver = true;
	checkForEndOfGame();
	showStatus();
});


function createDeck(){
	let deck = [];
	for (let suitId = 0; suitId < suits.length; suitId++)
	{
		for (let valueIdx=0; valueIdx < values.length; valueIdx++)
		{
			let card = {
				suit : suits[suitId],
				value : values[valueIdx]
			}
			deck.push(card);
		}
	}
	return deck;
}

function shuffleDeck(deck) {
	for (let i = 0; i < deck.length; i++) {
		let swapIdx = Math.trunc(Math.random() * deck.length);
		let tmp = deck[swapIdx];
		deck[swapIdx] = deck[i];
		deck[i] = tmp;
	}
}

function getNextCard(){
	return deck.shift();
}

function getCardString(card){
	return card.value +' of '+card.suit + '\n';
}

function showStatus() {
	if (!gameStarted)
	{
		textArea.innerText = 'Welcome to Blackjack!';
		return;
	}

	let dealerCardString = '';
	for (var i = 0; i < dealerCards.length; i++) {
		dealerCardString += getCardString(dealerCards[i]);
	}

	let playerCardString = '';
	for (var i = 0; i < playerCards.length; i++) {
		playerCardString += getCardString(playerCards[i]);
	}

	updateScores();

	textArea.innerText =
		'Dealer has:\n' +
		dealerCardString +
		'(score: ' + dealerScore + ')\n\n' +

		'Player has:\n' +
		playerCardString +
		'(score:' + playerScore + ')\n\n';

	if (gameOver) {
		if (playerWon) {
			textArea.innerText += 'YOU WIN!';
		} else {
			textArea.innerText += 'DEALER WIN!';
		}
		newGameButton.style.display = 'inline';
		hitButton.style.display = 'none';
		stayButton.style.display = 'none';
	}
}

function checkForEndOfGame(){
	updateScores();

	if (gameOver) {
		while(dealerScore < playerScore
			&& playerScore <= 21
			&& dealerScore <= 21){
			dealerCards.push(getNextCard());
			updateScores();
		}
	}

	if(playerScore > 21){
		playerWon = false;
		gameOver = true;
	}
	else if(dealerScore > 21){
		playerWon = true;
		gameOver = true;
	}
	else if(gameOver){
		if (playerScore > dealerScore) {
			playerWon = true;
		} else {
			playerWon = false;
		}
	}
}

function updateScores() {
	dealerScore = getScore(dealerCards);
	playerScore = getScore(playerCards)
}

function getScore(cardArray) {
	let score = 0;
	let hasAce = false;

	for (var i = 0; i < cardArray.length; i++) {
		let card= cardArray[i];
		score += getCardNumericValue(card);
		if (card.value === 'Ace') {
			hasAce = true;
		}
	}
	if (hasAce && score + 10 <= 21) {
		return score + 10;
	}
	return score;
}

function getCardNumericValue(card) {
	switch(card.value)
	{
		case 'Nine': return 9;
		case 'Eight': return 8;
		case 'Seven': return 7;
		case 'Six': return 6;
		case 'Five': return 5;
		case 'Four': return 4;
		case 'Three': return 3;
		case 'Two': return 2;
		case 'Ace': return 1;
		default:  return 10;
	}
}
