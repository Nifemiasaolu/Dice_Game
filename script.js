'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // current0El.textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Functionalizing the Dice Roll
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   console.log(dice);

  // 2. Display the dice roll
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  //   3. Add dice to current Score
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore; //CHANGE LATER
  } else {
    // Switch to the next Player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // 1. Add current score to total score
  scores[activePlayer] += currentScore;
  // score[1] = score[1] + currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2. Is score >= 100?
  if (scores[activePlayer] >= 20) {
    scores[activePlayer].classList.add('player--winner');
  }

  // 3. Switch Player
  switchPlayer();
});
