function getComputerChoice() {
    // Create a variable that stores random numbers between 1 and 3
    let numberedChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    // Create the choice variable
    let choice;
    // Switch if the number is 1: 'rock'; is 2: 'paper'; is 3: 'scissors'
    switch (numberedChoice) {
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
    }
    return choice;
}

console.log(getComputerChoice);