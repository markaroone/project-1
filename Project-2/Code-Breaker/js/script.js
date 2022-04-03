'use strict';
////////////////////////////////////
// DOM Elements

// Text values //////////////////////////////////
const roundNumber = document.getElementById('round-number');
const timerClock = document.getElementById('timer-clock');
const timerBar = document.getElementById('timer-bar-inner');
const currentScoreEl = document.getElementById('current-score');
const gameMessage = document.getElementById('game-message');
const numbersBox = document.getElementById('numbers-box');
const inputDisplay = document.getElementById('input-display');
let numbersBoxes;

// Buttons //////////////////////////////////
// Home Screen Buttons
const playGameHomeBtn = document.getElementById('home-btn--play');
const howToPlayHomeBtn = document.getElementById('home-btn--how-to-play');
const highScoreHomeBtn = document.getElementById('home-btn--high-score');

// Game Screen Buttons
const menuGameBtn = document.getElementById('menu-btn');
const pauseGameBtn = document.getElementById('pause-btn');
const decrementGameBtn = document.getElementById('dec-btn');
const incrementGameBtn = document.getElementById('inc-btn');
const randomGameBtn = document.getElementById('random-btn');
const enterGameBtn = document.getElementById('enter-btn');
const clearGameBtn = document.getElementById('clear-btn');

// Menu Screen Buttons
const backMenuBtn = document.getElementById('menu-btn--back');
const musicMenuBtn = document.getElementById('menu-btn--music');
const soundMenuBtn = document.getElementById('menu-btn--sound');
const howToPlayMenuBtn = document.getElementById('menu-btn--how-to-play');
const highScoreMenuBtn = document.getElementById('menu-btn--high-score');
const quitMenuBtn = document.getElementById('menu-btn--quit');

// Pause Screen Buttons
const backPauseBtn = document.getElementById('pause-btn--back');

// Round Cleared Screen Buttons
const exitGameRoundCleredBtn = document.getElementById('exit-game-btn');
const nextRoundRoundClearedBtn = document.getElementById('next-round-btn');

// Modals //////////////////////////////////
const homeModal = document.getElementById('home-screen-modal');
const menuModal = document.getElementById('menu-modal-container');
const pauseModal = document.getElementById('pause-modal-container');
const roundClearedModal = document.getElementById(
  'round-cleared-modal-container'
);

////////////////////////////////////
// Local JS
let currentRound = 1;
let numbersToGuess = [];
let currentNumberGuessing = 0;
let lowerRange = 1;
let higherRange = 20;
let defaultTime = 60; // in seconds unit
let runningTime = defaultTime;
let gameRunning = 0;
let gameOver = 0;
let timer;
let score = 0;
let numberOfCorrectGuesses = 0;

////////////////////////////////////
//  Functions

// This function will return a random number from the range given.
const generateRandomNum = (min, max) =>
  Math.round(Math.random() * (max - min)) + min;

// This function will return an array of randomly generated numbers from 0 - 100 with a length of the argument passed.
const generateNumbersToGuess = function (min = 1, max = 10, length = 1) {
  return Array.from({ length: length }, () => generateRandomNum(min, max));
};

// This function checks if the number entered is equal to the current number that is being guessed.
const checkGuess = function () {
  const guess = inputDisplay.value ? Number(inputDisplay.value) : NaN;

  if (!guess || guess < lowerRange || guess > higherRange) {
    displayMessage(
      `🚫 Please enter a number between ${lowerRange} - ${higherRange}`
    );
  } else if (guess === numbersToGuess[currentNumberGuessing]) {
    numbersBoxes[currentNumberGuessing].textContent =
      numbersToGuess[currentNumberGuessing];
    numbersBoxes[currentNumberGuessing].classList.add('show');

    numberOfCorrectGuesses++;

    addScore(10);

    clearInput();
    // console.log(numbersBoxes[currentNumberGuessing].textContent);

    currentNumberGuessing++;
    if (currentNumberGuessing === numbersToGuess.length) {
      displayMessage('Round Cleared!');

      if (currentRound > 1) addScore(20);

      resetTimer();
      clearInput();
      setTimeout(() => {
        roundClearedModal.classList.toggle('hidden');
      }, 2000);
    } else {
      displayMessage(`Nice One!`);
    }
  } else if (guess !== numbersToGuess[currentNumberGuessing]) {
    displayMessage(
      `${
        guess > numbersToGuess[currentNumberGuessing] ? 'Decrease' : 'Increase'
      } your answer`
    );
  }
};

// This function will display the numbers to guess. The amount of numbers to guess will change every round.
const inputBoxes = function () {
  numbersBox.innerHTML = '';

  let html = '';

  for (let i = 0; i < numbersToGuess.length; i++) {
    html += `<div id="${i}" class="number">?</div>`;
  }

  numbersBox.insertAdjacentHTML('beforeend', html);
};

// This function resets the inputDisplay
const clearInput = function () {
  inputDisplay.value = '';
};

// This function increments the value of inputDisplay if the input is a number and it is less than the max number
const incrementNum = function () {
  if (isFinite(inputDisplay.value) && inputDisplay.value < higherRange)
    ++inputDisplay.value;
};

// This function decrements the value of inputDisplay if the input is a number and it is greater than the max number
const decrementNum = function () {
  if (isFinite(inputDisplay.value) && inputDisplay.value > lowerRange)
    --inputDisplay.value;
};

// This function will change the inputDisplay value to a random number
const randomizeNumber = function () {
  inputDisplay.value = generateRandomNum(lowerRange, higherRange);
};

// This function accepts a string and displays the entered string to the gameMessage
const displayMessage = function (str) {
  gameMessage.textContent = str;
};

// This function sets the timerClock to the running time once the game is started
const updateTime = function () {
  timerClock.textContent = `${runningTime}s`;
  timerBar.style.width = `${(runningTime / defaultTime) * 100}%`;
};

// This function adds a score and updates the current score DOM element
const addScore = function (num) {
  score += num;
  currentScoreEl.textContent = score;
};

// This function will reset the game
const resetGame = function () {
  currentRound = 1;
  numbersToGuess = generateNumbersToGuess(
    lowerRange,
    higherRange,
    currentRound
  );
  currentNumberGuessing = 0;
  gameRunning = 0;
  gameOver = 0;

  updateTime();
  displayMessage('Code Breaker');

  // Wait 2 sec and display: "Enter a number"
  setTimeout(() => {
    displayMessage(`Guess the number from ${lowerRange} - ${higherRange}`);
  }, 1000);

  inputBoxes();
  clearInput();

  numbersBoxes = document.querySelectorAll('.number');
};

// This function will initialize the game after a round is completed
const initializeGame = function () {
  currentRound++;

  numbersToGuess = generateNumbersToGuess(
    lowerRange,
    higherRange,
    currentRound
  );
  currentNumberGuessing = 0;
  gameRunning = 0;

  displayMessage(`Enter a number from ${lowerRange} to ${higherRange}`);

  updateTime();

  inputBoxes();

  clearInput();

  numbersBoxes = document.querySelectorAll('.number');

  roundNumber.textContent = currentRound;
};

// This function resets the timer
const resetTimer = function () {
  clearTimeout(timer);
  // runningTime = defaultTime;
};

// This function starts the timer
const startTimer = function () {
  gameRunning = 1;
  timer = setInterval(decrementTimer, 1000);
};

// This function decrements the timer
const decrementTimer = function () {
  if (runningTime > 0 && gameRunning) {
    runningTime--;
    updateTime();
  } else if (runningTime < 1 && gameRunning) {
    gameRunning = 0;
    updateTime();
    resetTimer();
    // console.log('Game Over');
    playerLose();
  }
  // console.log(runningTime);
  // console.log(gameRunning);
};

// This function handles what will happen if the player lose the game
const playerLose = function () {
  displayMessage('Game Over');
  gameOver = 1;
};

resetGame();

// console.log(numbersToGuess);
// console.log(numbersBoxes);

////////////////////////////////////
// Events
// Keyboard events
document.addEventListener('keyup', (e) => {
  // console.log(numbersToGuess);
  // console.log(e.key);
  // Checks the guess if enter is pressed
  e.preventDefault();
  if (e.key === 'Enter' && !gameOver) {
    if (!gameRunning) {
      gameRunning = 1;
      startTimer();
    }

    checkGuess();
  } else if (e.key === 'Delete') clearInput();
});

// Home Screen Events /////////////////////
playGameHomeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  homeModal.classList.toggle('hidden');
});

// Game Screen Events /////////////////////

// Game Screen - Enter Button
enterGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameOver) {
    checkGuess();
    if (!gameRunning) {
      startTimer();
    }
  }
});

// Game Screen - Clear Button
clearGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameOver) {
    clearInput();
  }
});

// Game Screen - Random Button
randomGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameOver) {
    randomizeNumber();
    if (!gameRunning) {
      startTimer();
    }
  }
});

// Game Screen - Increment Button
incrementGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameOver) {
    incrementNum();
    if (!gameRunning) {
      startTimer();
    }
  }
});

// Game Screen - Decrement Button
decrementGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameOver) {
    decrementNum();
    if (!gameRunning && !gameOver) {
      startTimer();
    }
  }
});

// Game Screen - Menu Button
menuGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menuModal.classList.toggle('hidden');
});

// Game Screen - Pause Button
pauseGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  pauseModal.classList.toggle('hidden');
});

// Menu Screen Events /////////////////////
backMenuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menuModal.classList.toggle('hidden');
});

// Pause Screen Events /////////////////////
// Pause Screen - Back to Game Button
backPauseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  pauseModal.classList.toggle('hidden');
});

// Round Cleared Screen Events /////////////////////
// Round Cleared - Next Round Button
nextRoundRoundClearedBtn.addEventListener('click', (e) => {
  e.preventDefault();
  roundClearedModal.classList.toggle('hidden');
  initializeGame();
});
