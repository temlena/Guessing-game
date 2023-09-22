"use strict";
const number = document.querySelector(".number");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = " 🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = " #ca907e";
    number.textContent = secretNumber;
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== secretNumber && score > 1) {
    document.querySelector(".message").textContent =
      guess > secretNumber ? "Too high" : "Too low";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "💥 You lose the game!";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".play").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#dbd8ae";
});
