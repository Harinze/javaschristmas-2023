import JSConfetti from 'js-confetti';

const words = ['santa', 'season', 'food', 'gift', 'complements'];
const word = words[Math.floor(Math.random() * words.length)];
const wordArr = word.split('');
const wordDisplay = document.getElementById('word-display');

document.addEventListener('submit', handleGuess);

function renderSpaces() {
    const wordHtml = wordArr.map(() => {
        return `<span class="letter">-</span>`;
    });
    wordDisplay.innerHTML = wordHtml.join('');
}

renderSpaces();

function renderGuess(arr) {
    const wordHtml = arr.map((letter) => {
        return `<span class="letter">${letter}</span>`;
    });
    wordDisplay.innerHTML = wordHtml.join('');
}

function handleGuess(e) {
    e.preventDefault();
    
     /**
//  * Debug Challenge:
//  * 1. There are loads of problems with the 
//  *    code below. Find them and fix them!
//  **/

    let currentState = [];
    let input = document.getElementById('user-input');
    const guess = input.value.trim();
    const guessArr = guess.split('');

    wordArr.forEach((letter) => {
        if (letter === guessArr[0]) {
            currentState.push(letter);
        } else {
            currentState.push('-');
        }
    });

    renderGuess(currentState);
    checkWin(guess);
    input.value = '';
}

function checkWin(guess) {
    if (word === guess) {
        console.log("word",word)
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['🧑‍🎄', '🎅'],
            emojiSize: 50,
            confettiNumber: 60,
            confettiRadius: 6,
        });
        jsConfetti.addConfetti();

        setTimeout(() => {
            location.reload();
        }, 3000); 
    }
}

