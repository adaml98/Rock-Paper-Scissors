//function to create random number
function randomNo() {
    return Math.floor(Math.random() * 3) + 1;
}

//function for computer selection
function computerPlay() {
    if (randomNo() === 1) {
        return "rock";

    } else if (randomNo() === 2) {
        return "paper";

    } else {
        return "scissors"

    }
}

//function for each round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    //compare selections
    if (playerSelection == computerSelection) {
        return result = `You draw! You both picked ${playerSelection}`;//output outcome of game

    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        return result = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return result = `You lose! ${computerSelection} beats ${playerSelection}`;
    };
}


//function to create game with win clause
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let i =1;
    const results = document.querySelector("#results"); // reference results div that already exists
    const score = document.querySelector("#score");
    const body = document.querySelector("body");
    //button listeners
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playerSelection = button.id;
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            if (result === `You win! ${playerSelection} beats ${computerSelection}`) {
                playerScore+=2;
            } else if (result === `You lose! ${computerSelection} beats ${playerSelection}`) {
                computerScore+=2;
            } else {
                playerScore++;
                computerScore++;
            }
            const presult = document.createElement("p");
            results.appendChild(presult);
            presult.textContent = `Round ${i}: ${playRound(playerSelection, computerSelection)}`
            const pscore = document.createElement("p");
            score.appendChild(pscore);
            pscore.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

            i++;

            if (playerScore >= 5) {
                body.style.backgroundColor = "green";
                body.style.color = "white";
                body.replaceChildren();
                const endgame = document.createElement("h1");
                body.appendChild(endgame);
                endgame.textContent = `YOU WIN!`;
                endgame.style.textAlign = "center";
                endgame.style.fontSize = "170px";

            } else if (computerScore >= 5) {
                body.style.backgroundColor = "red";
                body.style.color = "white";
                body.replaceChildren();
                const endgame = document.createElement("h1");
                body.appendChild(endgame);
                endgame.textContent = `YOU LOSE!`;
                endgame.style.textAlign = "center";
                endgame.style.fontSize = "170px";
            }
        });
    });      
    
}

//RUN GAME
game();
