let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  target = Math.floor(Math.random() * 10); // variable declared in game.js line 1
};

const alertOutOfRange = (currentHumanGuess) => {
  if (currentHumanGuess > 9 || currentHumanGuess < 0) {
    alert(
      "That value is out of range. Please input a value between 0 and 9, inclusive."
    );
  }
};

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  const humanGuessDistanceFromTarget = Math.abs(target - currentHumanGuess);
  const computerGuessDistanceFromTarget = Math.abs(target - computerGuess);
  if (humanGuessDistanceFromTarget <= computerGuessDistanceFromTarget) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore = humanScore + 1;
  } else if (winner === "computer") {
    computerScore = computerScore + 1;
  }
};

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
};
