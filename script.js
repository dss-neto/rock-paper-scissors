function main() {
  const divButton = document.getElementById("divButton");
  const divResult = document.getElementById("divResult");
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    // Create a variable that stores random numbers between 0 and 2
    // Inclusive range random formula: Math.floor(Math.random() * (max(2) - min(0) + 1)) + min(0)
    let numberedChoice = Math.floor(Math.random() * (2 + 1));

    const choiceArray = ["rock", "paper", "scissors"];

    return choiceArray[numberedChoice];
  }

  function playRound(humanChoice, computerChoice) {
    const didHumanBeatComputer = () =>
      whoBeats[humanChoice]["beats"] === computerChoice;
    const didComputerBeatHuman = () =>
      whoBeats[computerChoice]["beats"] === humanChoice;
    // Assign the result to a variable
    let resultString;

    // Assign result strings to variables so coding becomes easier
    const paperWins = "paper beats rock.";
    const scissorsWins = "scissors beats paper.";
    const rockWins = "rock beats scissors.";

    const whoBeats = {
      rock: {
        beats: "scissors",
        resultStr: rockWins,
      },
      paper: {
        beats: "rock",
        resultStr: paperWins,
      },
      scissors: {
        beats: "paper",
        resultStr: scissorsWins,
      },
    };

    // Check the winner
    if (didHumanBeatComputer()) {
      resultString = "You won! " + whoBeats[humanChoice]["resultStr"];
      humanScore++;
    } else if (didComputerBeatHuman()) {
      resultString = "You lost! " + whoBeats[computerChoice]["resultStr"];
      computerScore++;
    } else {
      resultString = "It's a draw!";
    }

    divResult.textContent = `You chose ${humanChoice}\nThe computer chose ${computerChoice}\n${resultString}\nYour score: ${humanScore}\nComputer score: ${computerScore}`;

    if (humanScore === 5) {
      divResult.textContent =
        "5 scores reached!\n And the winner is... the Human!";
      humanScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      divResult.textContent =
        "5 scores reached!\nAnd the winner is... the Computer.";
      humanScore = 0;
      computerScore = 0;
    }
  }

  divButton.addEventListener("click", (e) => {
    const wasButtonPressed = () => e.target.tagName === "BUTTON";
    if (wasButtonPressed()) {
      playRound(e.target.id, getComputerChoice());
    }
  });
}

main();
