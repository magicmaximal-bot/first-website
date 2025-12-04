const quotes = [
    "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
    "The soul can never be cut into pieces by any weapon, nor can he be burned by fire, nor moistened by water, nor withered by the wind.",
    "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his very mind will be the greatest enemy.",
    "As a person puts on new garments, giving up old ones, similarly, the soul accepts new material bodies, giving up the old and useless ones.",
    "There is neither this world, nor the world beyond nor happiness for the one who doubts.",
    "One who sees inaction in action, and action in inaction, is intelligent among men.",
    "Perform your obligatory duty, because action is indeed better than inaction.",
    "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    "He who has no attachment to the result of his actions and to the world, he is the true Yogi.",
    "I am the beginning, middle, and end of creation."
];

// Wisdom Section Logic
const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote-btn');

function displayRandomQuote() {
    // Add fade out effect
    quoteText.style.opacity = 0;
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = `"${quotes[randomIndex]}"`;
        // Add fade in effect
        quoteText.style.opacity = 1;
    }, 300);
}

newQuoteBtn.addEventListener('click', displayRandomQuote);

// Initial quote
displayRandomQuote();


// Chanting Section Logic
const mantraCircle = document.getElementById('mantra-circle');
const counterDisplay = document.getElementById('counter');
const resetBtn = document.getElementById('reset-btn');

let count = 0;

mantraCircle.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
    
    // Add pulse animation class
    mantraCircle.classList.add('pulse');
    
    // Remove class after animation completes to allow re-triggering
    setTimeout(() => {
        mantraCircle.classList.remove('pulse');
    }, 500);
    
    // Optional: Play a soft click or bell sound here if requested
});

resetBtn.addEventListener('click', () => {
    if(confirm('Are you sure you want to reset your chant count?')) {
        count = 0;
        counterDisplay.textContent = count;
    }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
