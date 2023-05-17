'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById ('current--0');
const current1El = document.getElementById ('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

let currentScore = 0;

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
    current0El.textContent = currentScore; //CHANGE LATER
  } else {
    // Switch to the next Player 
    
  }
});
