const tarotCards = [
    'The Fool',
    'The Magician',
    'The High Priestess',
    'The Empress',
    'The Emperor',
    'The Hierophant',
    'The Lovers',
    'The Chariot',
    'Strength',
    'The Hermit',
    'Wheel of Fortune',
    'Justice',
    'The Hanged Man',
    'Death',
    'Temperance',
    'The Devil',
    'The Tower',
    'The Star',
    'The Moon',
    'The Sun',
    'Judgement',
    'The World'
];

// Function to shuffle the tarot cards
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

// Function to select a random card
function selectRandomCard(cards) {
    const shuffledCards = shuffleCards(cards);
    return shuffledCards[0];
}

// Function to display a card
function displayCard(card) {
    const cardDisplay = document.getElementById('card-display');
    if (cardDisplay) {
        cardDisplay.textContent = card;
    }
}

// Event Listener for button click
document.getElementById('draw-card-btn').addEventListener('click', () => {
    const selectedCard = selectRandomCard(tarotCards);
    displayCard(selectedCard);
});
