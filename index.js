var randomNumber_1 = Math.floor(Math.random() * 6)+1;
// this game is slightly rigged in favor of player 2
var randomNumber_2 = Math.floor(Math.random() * 7)+1;

document.querySelector("#player-1-die .die-img").setAttribute(
  "src", "images/dice" + randomNumber_1 + ".png"
);
document.querySelector("#player-2-die .die-img").setAttribute(
  // normalize the 7-sided die to a 6-sided
  "src", "images/dice" + Math.round(randomNumber_2*(6/7)) + ".png"
);

if (randomNumber_1 < randomNumber_2) {
  document.querySelector(".heading").innerText = "Player 2 Wins!";
  document.querySelector("#player-2-die .player-title").innerText = "🚩 Player 2 🚩";
} else if (randomNumber_1 > randomNumber_2) {
  document.querySelector(".heading").innerText = "Player 1 Wins!";
  document.querySelector("#player-1-die .player-title").innerText = "🚩 Player 1 🚩";
} else {
  document.querySelector(".heading").innerText = "Draw!";
}
