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
    //button listeners
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playerSelection = button.id;
            computerSelection = computerPlay();
            playRound();
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
             //`Player Score: ${playerScore} Computer Score: ${computerScore}`;
            i++;
        });
    });

    //}// 5 rounds exit bracket
    /*
                if(playerScore === 5){
                    alert("You win the game!");
                    console.log("..........");
                    console.log("Game Over!");
                    console.log("..........");
                    console.log("You win!");
                } else if (computerScore === 5){
                    alert("You lose the game! ");
                    console.log("..........");
                    console.log("Game Over!");
                    console.log("..........");
                    console.log("You lose!");
               
    */
}

//RUN GAME
game();
