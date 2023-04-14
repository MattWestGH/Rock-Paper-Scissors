let winCount = 0;
let lossCount = 0;
let playerChoice = "";
const choices = ["rock", "paper", "scissors"];
let comChoice = "";
let appDOM = document.getElementById("container");
function getValue() {
  const selectElement = document.getElementById("selectElement");
  let option = selectElement.options[selectElement.selectedIndex];
  playerChoice = option.value;
}

function checkChoice(form) {
  getValue();
  comChoice = choices[Math.floor(Math.random() * 3)];
  if (playerChoice == "rock" && comChoice == "scissors") {
    const textContainer = document.createElement("div");
    const textResult = document.createTextNode("You Win!");
    textContainer.appendChild(textResult);
    textContainer.classList.add(
      "row",
      "d-flex",
      "justify-content-center",
      "py-3"
    );
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
      retryButton.remove();
    });
  } else if (playerChoice == "rock" && comChoice == "paper") {
    const textContainer = document.createElement("div");
    const textResult = document.createTextNode("You Lose...");
    textContainer.appendChild(textResult);
    textContainer.classList.add(
      "row",
      "d-flex",
      "justify-content-center",
      "py-3"
    );
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
      retryButton.remove();
    });
  } else if (playerChoice == "rock" && comChoice == "rock") {
    const textContainer = document.createElement("div");
    const textResult = document.createTextNode("It's a tie");
    textContainer.appendChild(textResult);
    textContainer.classList.add(
      "row",
      "d-flex",
      "justify-content-center",
      "py-3"
    );
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
      retryButton.remove();
    });
  } else if (playerChoice == "paper" && comChoice == "rock") {
    const textContainer = document.createElement("div");
    const textResult = document.createTextNode("You Win!");
    textContainer.appendChild(textResult);
    textContainer.classList.add(
      "row",
      "d-flex",
      "justify-content-center",
      "py-3"
    );
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
      retryButton.remove();
    });
  } else if (playerChoice == "paper" && comChoice == "scissors") {
    const textContainer = document.createElement("div");
    const textResult = document.createTextNode("You Lose...");
    textContainer.appendChild(textResult);
    textContainer.classList.add(
      "row",
      "d-flex",
      "justify-content-center",
      "py-3"
    );
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
      retryButton.remove();
    });
  } else if (playerChoice == "paper" && comChoice == "paper") {
    const textContainer = document.createElement("div");
    const textResult = document.createTextNode("It's a tie");
    textContainer.appendChild(textResult);
    textContainer.classList.add(
      "row",
      "d-flex",
      "justify-content-center",
      "py-3"
    );
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
      retryButton.remove();
    });
  } else if (playerChoice == "scissors" && comChoice == "paper") {
    const textContainer = document.createElement("div");
    const textResult = document.createTextNode("You Win!");
    textContainer.appendChild(textResult);
    textContainer.classList.add(
      "row",
      "d-flex",
      "justify-content-center",
      "py-3"
    );
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
      retryButton.remove();
    });
  } else if (playerChoice == "scissors" && comChoice == "rock") {
    const textContainer = document.createElement("div");
    const textResult = document.createTextNode("You Lose...");
    textContainer.appendChild(textResult);
    textContainer.classList.add(
      "row",
      "d-flex",
      "justify-content-center",
      "py-3"
    );
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
      retryButton.remove();
    });
  } else if (playerChoice == "scissors" && comChoice == "scissors") {
    const textContainer = document.createElement("div");
    const textResult = document.createTextNode("It's a tie");
    textContainer.appendChild(textResult);
    textContainer.classList.add(
      "row",
      "d-flex",
      "justify-content-center",
      "py-3"
    );
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
      retryButton.remove();
    });
  }
  return false;
}
