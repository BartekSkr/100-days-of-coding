const selectionButtons = document.querySelectorAll("[data-choice]");
const finalColumn = document.querySelector("[data-final-column]");
const yourScoreSpan = document.querySelector("[data-your-score]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const CHOICES = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌️",
    beats: "paper",
  },
];

selectionButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    makeChoice(choice);
  })
);

function makeChoice(yourChoice) {
  const computerChoice = randomChoice();
  const youWin = winner(yourChoice, computerChoice);
  const computerWin = winner(computerChoice, yourChoice);

  addChoiceResult(computerChoice, computerWin);
  addChoiceResult(yourChoice, youWin);

  if (youWin) {
    incrementScore(yourScoreSpan);
  }
  if (computerWin) {
    incrementScore(computerScoreSpan);
  }
}

function randomChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}

function winner(yourChoice, computerChoice) {
  return yourChoice.beats === computerChoice.name;
}

function addChoiceResult(choice, winner) {
  const div = document.createElement("div");
  div.innerText = choice.emoji;
  div.classList.add("results");
  if (winner) {
    div.classList.add("winner");
  }
  finalColumn.after(div);
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}
