
const cardsArray = [
    { name: 'A', id: 1 },
    { name: 'B', id: 2 },
    { name: 'C', id: 3 },
    { name: 'D', id: 4 },
    { name: 'E', id: 5 },
    { name: 'F', id: 6 },
    { name: 'G', id: 7 },
    { name: 'H', id: 8 },
];

let gameBoard = document.getElementById('gameBoard');
let victoryScreen = document.getElementById('victoryScreen');
let playAgainButton = document.getElementById('playAgainBtn');
let flippedCards = [];
let matchedCards = [];
let canFlip = true;

// Duplicate cards to create pairs
let gameCards = [...cardsArray, ...cardsArray];
gameCards = gameCards.sort(() => Math.random() - 0.5);

// Create cards
gameCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-id', card.id);
    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
});

function flipCard() {
    if (flippedCards.length === 2 || matchedCards.includes(this)) return;

    this.classList.add('flipped');
    this.textContent = this.getAttribute('data-id');

    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    canFlip = false;

    const [firstCard, secondCard] = flippedCards;
    if (firstCard.getAttribute('data-id') === secondCard.getAttribute('data-id')) {
        matchedCards.push(firstCard, secondCard);
        flippedCards = [];
        canFlip = true;

        if (matchedCards.length === gameCards.length) {
            showVictoryScreen();
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
            flippedCards = [];
            canFlip = true;
        }, 1000);
    }
}

function showVictoryScreen() {
    victoryScreen.style.display = 'block';
}

playAgainButton.addEventListener('click', resetGame);

function resetGame() {
    matchedCards = [];
    flippedCards = [];
    canFlip = true;
    gameBoard.innerHTML = '';
    victoryScreen.style.display = 'none';
    gameCards = [...cardsArray, ...cardsArray];
    gameCards = gameCards.sort(() => Math.random() - 0.5);

    gameCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-id', card.id);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}
