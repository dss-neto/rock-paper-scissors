function getComputerChoice() {
    // Create a variable that stores random numbers between 1 and 3
    let numberedChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    // Create the choice variable
    let computerChoice;
    // Switch if the number is 1: 'rock'; is 2: 'paper'; is 3: 'scissors'
    switch (numberedChoice) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    // Prompt to number so it is more specific
    let humanChoice = prompt('1 for "rock"\n2 for "paper"\n3 for "scissors"','');
    // Switch if the number is 1: 'rock'; is 2: 'paper'; is 3: 'scissors'
    switch (humanChoice) {
        case '1':
            humanChoice = 'rock';
            break;
        case '2':
            humanChoice = 'paper';
            break;
        case '3':
            humanChoice = 'scissors';
            break;
    }
    return humanChoice;
}