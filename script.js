const quotes = [
    { text: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.", source: "BG 2.47" },
    { text: "The soul can never be cut into pieces by any weapon, nor can he be burned by fire, nor moistened by water, nor withered by the wind.", source: "BG 2.23" },
    { text: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his very mind will be the greatest enemy.", source: "BG 6.6" },
    { text: "As a person puts on new garments, giving up old ones, similarly, the soul accepts new material bodies, giving up the old and useless ones.", source: "BG 2.22" },
    { text: "There is neither this world, nor the world beyond nor happiness for the one who doubts.", source: "BG 4.40" },
    { text: "One who sees inaction in action, and action in inaction, is intelligent among men.", source: "BG 4.18" },
    { text: "Perform your obligatory duty, because action is indeed better than inaction.", source: "BG 3.8" },
    { text: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.", source: "BG 6.19" },
    { text: "He who has no attachment to the result of his actions and to the world, he is the true Yogi.", source: "BG 6.1" },
    { text: "I am the beginning, middle, and end of creation.", source: "BG 10.20" },
    { text: "For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being.", source: "BG 2.20" },
    { text: "Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues.", source: "BG 3.21" },
    { text: "The wise, engaged in devotional service, take refuge in the Lord, and free themselves from the cycle of birth and death by renouncing the fruits of action in the material world.", source: "BG 2.51" },
    { text: "A person is said to be established in self-realization and is called a yogi [or mystic] when he is fully satisfied by virtue of acquired knowledge and realization.", source: "BG 6.8" },
    { text: "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is he ever lost to Me.", source: "BG 6.30" },
    { text: "I am the source of all spiritual and material worlds. Everything emanates from Me.", source: "BG 10.8" },
    { text: "Engage your mind always in thinking of Me, become My devotee, offer obeisances to Me and worship Me. Being completely absorbed in Me, surely you will come to Me.", source: "BG 9.34" },
    { text: "There is no truth superior to Me. Everything rests upon Me, as pearls are strung on a thread.", source: "BG 7.7" },
    { text: "One who knows the transcendental nature of My appearance and activities does not, upon leaving the body, take his birth again in this material world, but attains My eternal abode.", source: "BG 4.9" },
    { text: "I am the Super Soul, seated in the hearts of all living entities.", source: "BG 10.20" }
];

// Wisdom Section Logic
const quoteText = document.getElementById('quote-text');
const quoteSource = document.getElementById('quote-source');
const newQuoteBtn = document.getElementById('new-quote-btn');

function displayRandomQuote() {
    // Add fade out effect
    quoteText.style.opacity = 0;
    quoteSource.style.opacity = 0;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = `"${quotes[randomIndex].text}"`;
        quoteSource.textContent = `- ${quotes[randomIndex].source}`;
        // Add fade in effect
        quoteText.style.opacity = 1;
        quoteSource.style.opacity = 1;
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
});

resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset your chant count?')) {
        count = 0;
        counterDisplay.textContent = count;
    }
});

// Flower Offering Logic
const altar = document.getElementById('altar');
const clearFlowersBtn = document.getElementById('clear-flowers-btn');

altar.addEventListener('click', (e) => {
    const rect = altar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Don't allow placing too close to edges if needed, but simple is fine

    const flower = document.createElement('div');
    flower.classList.add('offered-flower');

    // Randomize rotation and slight size variation
    const rotation = Math.random() * 360;
    const scale = 0.8 + Math.random() * 0.4;

    flower.style.left = `${x - 30}px`; // Center on click
    flower.style.top = `${y - 30}px`;
    flower.style.transform = `rotate(${rotation}deg) scale(${scale})`;

    altar.appendChild(flower);
});

clearFlowersBtn.addEventListener('click', () => {
    altar.innerHTML = '';
});

// Meditation Timer Logic
const breathingCircle = document.getElementById('breathing-circle');
const breathText = document.getElementById('breath-text');
const startMeditationBtn = document.getElementById('start-meditation-btn');
const stopMeditationBtn = document.getElementById('stop-meditation-btn');

let meditationInterval;
let isMeditating = false;

function breathingCycle() {
    breathText.textContent = "Inhale";
    breathingCircle.classList.add('inhale');
    breathingCircle.classList.remove('exhale');

    setTimeout(() => {
        if (!isMeditating) return;
        breathText.textContent = "Hold";

        setTimeout(() => {
            if (!isMeditating) return;
            breathText.textContent = "Exhale";
            breathingCircle.classList.remove('inhale');
            breathingCircle.classList.add('exhale');

            setTimeout(() => {
                if (!isMeditating) return;
                breathText.textContent = "Hold";
            }, 4000); // Exhale duration

        }, 2000); // Hold duration

    }, 4000); // Inhale duration
}

startMeditationBtn.addEventListener('click', () => {
    isMeditating = true;
    startMeditationBtn.style.display = 'none';
    stopMeditationBtn.style.display = 'inline-block';

    breathingCycle();
    meditationInterval = setInterval(breathingCycle, 12000); // Total cycle 4+2+4+2 = 12s
});

stopMeditationBtn.addEventListener('click', () => {
    isMeditating = false;
    clearInterval(meditationInterval);
    startMeditationBtn.style.display = 'inline-block';
    stopMeditationBtn.style.display = 'none';

    breathText.textContent = "Ready";
    breathingCircle.classList.remove('inhale', 'exhale');
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
