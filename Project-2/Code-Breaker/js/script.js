'use strict';
////////////////////////////////////
// DOM Elements

// Text values
const roundNumber = document.getElementById('round-number');
const timerClock = document.getElementById('timer-clock');
const gameMessage = document.getElementById('game-message');
const numbersBox = document.getElementById('numbers-box');
const inputDisplay = document.getElementById('input-display');
let numbersBoxes;

// Buttons
const menuBtn = document.getElementById('menu-btn');
const pauseBtn = document.getElementById('pause-btn');
const decrementBtn = document.getElementById('dec-btn');
const incrementBtn = document.getElementById('inc-btn');
const randomBtn = document.getElementById('random-btn');
const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');

// Local
let currentRound = 1;
let numbersToGuess = [];
let currentNumberGuessing = 0;
let lowerRange = 1;
let higherRange = 20;
let defaultTime = 10; // in seconds unit
let runningTime = defaultTime;
let gameRunning = 0;
let gameOver = 0;
let timer;

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

    clearInput();
    // console.log(numbersBoxes[currentNumberGuessing].textContent);

    currentNumberGuessing++;
    if (currentNumberGuessing === numbersToGuess.length) {
      displayMessage('You Win!');
      resetTimer();
      clearInput();
      setTimeout(initializeGame, 2000);
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
const displayTime = function () {
  timerClock.textContent = `${runningTime}s`;
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

  displayTime();
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

  displayTime();

  inputBoxes();

  clearInput();

  numbersBoxes = document.querySelectorAll('.number');

  roundNumber.textContent = currentRound;
};

// This function resets the timer
const resetTimer = function () {
  clearTimeout(timer);
  runningTime = defaultTime;
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
    displayTime();
  } else if (runningTime < 1 && gameRunning) {
    gameRunning = 0;
    displayTime();
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

enterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameOver) {
    checkGuess();
    if (!gameRunning) {
      startTimer();
    }
  }
});

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameOver) {
    clearInput();
  }
});

randomBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameOver) {
    randomizeNumber();
    if (!gameRunning) {
      startTimer();
    }
  }
});

incrementBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameOver) {
    incrementNum();
    if (!gameRunning) {
      startTimer();
    }
  }
});

decrementBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameOver) {
    decrementNum();
    if (!gameRunning && !gameOver) {
      startTimer();
    }
  }
});
