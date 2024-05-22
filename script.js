"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🚷 WRONG NUMBER!";

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "✅ CORRECT!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector(".highscore").textContent = highScore;
    }
    //when guess is too high
  } else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector(".score").textContent = scoreNumber -= 1;

      document.querySelector(".message").textContent = "⬆️ TOO HIGH! ";
    } else {
      document.querySelector(".message").textContent = "🤯YOU LOST THE GAME! ";
      document.querySelector(".score").textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector(".score").textContent = scoreNumber -= 1;
      document.querySelector(".message").textContent = "⬇️ TOO LOW! ";
    } else {
      document.querySelector(".message").textContent = "🤯YOU LOST THE GAME! ";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

document.querySelector(".again").addEventListener("click", function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing... ";
  document.querySelector(".score").textContent = scoreNumber;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
