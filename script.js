function main() {

    function getComputerChoice() {
        // Create a variable that stores random numbers between 0 and 2
        // Inclusive range random formula: Math.floor(Math.random() * (max(2) - min(0) + 1)) + min(0).
        let numberedChoice = Math.floor(Math.random() * (2 + 1));

        const choiceArray = ['rock', 'paper', 'scissors'];

        return choiceArray[numberedChoice];
    }

    function getHumanChoice() {
        // Prompt to lower case so it is case-insensitive
        let humanChoice = prompt('Choose between: "rock", "paper", "scissors"','');
        if (humanChoice === null) {
            console.log('Canceled.');
        } else humanChoice = humanChoice.toLowerCase();
        return humanChoice;
    }

    function playRound(humanChoice, computerChoice) {
        // Assign the result to a variable
        let resultString;

        // Assign result strings to variables so coding becomes easier
        const paperWins = 'Paper beats Rock.';
        const scissorsWins = 'Scissors beats Paper.';
        const rockWins = 'Rock beats Scissors.';

        // Check who wins
        if (humanChoice == 'rock' && computerChoice == 'paper') {
            resultString = 'You lose! ' + paperWins;
            computerScore++;

        } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            resultString = 'You lose! '+ scissorsWins;
            computerScore++;

        } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            resultString = 'You lose! ' + rockWins;
            computerScore++;

        } else if (humanChoice == computerChoice) {
            resultString = "It's a draw!";

        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            resultString = 'You won! ' + paperWins;
            humanScore++;

        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            resultString = 'You won! ' + scissorsWins;
            humanScore++;

        } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            resultString = 'You won! ' + rockWins;
            humanScore++;
        }
        console.log(' ');
        console.log('You chose ' + humanChoice);
        console.log('The computer chose ' + computerChoice);
        console.log(resultString);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    function playGame() {
        humanScore = 0;
        computerScore = 0;

        for (let i = 0; i < 5; i++) {
            // Assign the human and computer choice to constant variables
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);
        }
    }

    playGame();
}

main();