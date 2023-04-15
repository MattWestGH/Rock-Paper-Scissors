let winCount = 0;
let lossCount = 0;
let playerChoice = "";
const choices = ["rock", "paper", "scissors"];
let comChoice = "";
let appDOM = document.getElementById("container");

// getValue() gets the current calue the player has selected in the <select> menu and stores it in a player choice var for later use
function getValue() {
  const selectElement = document.getElementById("selectElement");
  let option = selectElement.options[selectElement.selectedIndex];
  playerChoice = option.value;
}
// retryButton() creates a button that restarts the game and clears the win/loss/tie text, as well as the "play again" button
function retryButton(textContainer) {
  appDOM.appendChild(textContainer);
  const buttonDiv = document.createElement("div");
  const retryButton = document.createElement("button");
  const retryText = document.createTextNode("Play Again");
  buttonDiv.classList.add("d-flex", "justify-content-center");
  retryButton.classList.add("btn", "btn-danger");
  appDOM.appendChild(buttonDiv);
  buttonDiv.appendChild(retryButton);
  retryButton.appendChild(retryText);
  retryButton.addEventListener("click", () => {
    textContainer.remove();
    buttonDiv.remove();
  });
}
// winText() creates the winning text
function winText(textContainer) {
  const textResult = document.createTextNode("You Win!");
  textContainer.appendChild(textResult);
  textContainer.classList.add(
    "row",
    "d-flex",
    "justify-content-center",
    "py-3"
  );
  retryButton(textContainer);
}
// lossText() creates the losing text
function lossText(textContainer) {
  const textResult = document.createTextNode("You Lose...");
  textContainer.appendChild(textResult);
  textContainer.classList.add(
    "row",
    "d-flex",
    "justify-content-center",
    "py-3"
  );
  retryButton(textContainer);
}
// tieText() creates the tie text
function tieText(textContainer) {
  const textResult = document.createTextNode("It's a tie");
  textContainer.appendChild(textResult);
  textContainer.classList.add(
    "row",
    "d-flex",
    "justify-content-center",
    "py-3"
  );
  retryButton(textContainer);
}
/* 
checkChoice() is the logic that runs for the Rock Paper Scissors game.
Comparing the player input and a random generated input,
which calls the resulting text.
*/
function checkChoice(form) {
  getValue();
  const textContainer = document.createElement("div");
  comChoice = choices[Math.floor(Math.random() * 3)];
  if (playerChoice == "rock" && comChoice == "scissors") {
    winText(textContainer);
  } else if (playerChoice == "rock" && comChoice == "paper") {
    lossText(textContainer);
  } else if (playerChoice == "rock" && comChoice == "rock") {
    tieText(textContainer);
  } else if (playerChoice == "paper" && comChoice == "rock") {
    winText(textContainer);
  } else if (playerChoice == "paper" && comChoice == "scissors") {
    const textResult = document.createTextNode("You Lose...");
    lossText(textContainer);
  } else if (playerChoice == "paper" && comChoice == "paper") {
    tieText(textContainer);
  } else if (playerChoice == "scissors" && comChoice == "paper") {
    winText(textContainer);
  } else if (playerChoice == "scissors" && comChoice == "rock") {
    lossText(textContainer);
  } else if (playerChoice == "scissors" && comChoice == "scissors") {
    tieText(textContainer);
  }
  return false;
}
