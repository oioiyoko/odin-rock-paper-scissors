function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let numberPlayed = getRandomInt();
    let computerSelection;
    if (numberPlayed == 0) {
        computerSelection = "rock";
    }
    else if (numberPlayed == 1) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let status;
    if (playerSelection === computerSelection) {
        status = 0;
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            status = -1;
        }
        else if (computerSelection === "scissors") {
            status = 1;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            status = 1;
        }
        else if (computerSelection === "scissors") {
            status = -1;
        }
    }
    else if (playerSelection==="scissors") {
        if (computerSelection === "rock") {
            status = -1;
        }
        else if (computerSelection === "paper") {
            status = 1;
        }
    }
    return status;
}

function game() {
    let score = 0;
    let result;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?")
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        score += playRound(playerSelection, computerSelection);
    }
    if (score = 0) {
        result = "tie";
        console.log("You " + result + "!");
    }
    else if (score > 0) {
        result = "win";
        console.log("You " + result + "!");
    }
    else {
        result = "lose";
        console.log("You " + result + "!");
    }
}

game();