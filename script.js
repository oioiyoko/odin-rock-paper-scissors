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
    let status = 0;
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
    let turns = 0;
    let playerSelection = "";
    let computerSelection = "";
    let btn = document.querySelector('#signs');

    btn.addEventListener('click', (event) => {
        const result = document.querySelector('.displayResults');
        playerSelection = event.target.className;
        console.log("player played: " + playerSelection);
        computerSelection = getComputerChoice();
        console.log("computer played: " + computerSelection);
        score += playRound(playerSelection, computerSelection);

        result.textContent = "Player played: " + playerSelection + "\r\n";
        result.textContent += "Computer played: " + computerSelection;
        console.log("new score is: " + score);
        turns++;
        console.log("turns: "+ turns)

        if (turns == 5) {
            if (score == 0) {
                result.textContent = 'You tie!';
            }
            else if (score > 0) {
                result.textContent ='You win!';
            }
            else if (score < 0) {
                result.textContent = 'You lose!';
            }
        }
        else if (turns > 5) {
            turns = 0;
            score =0;
        }
    });
}

game();
