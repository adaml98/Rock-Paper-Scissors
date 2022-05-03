//function to create random number
function randomNo() {
    return Math.floor(Math.random() * 3) + 1;
}


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
    //console.log(button.id);
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
    let i = 0;
    //for(i = 0; i < 5; i++){ //Play 5 rounds


    //button listeners
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playerSelection = button.id;
            console.log(playerSelection);
            computerSelection = computerPlay();
            playRound();
            alert(playRound(playerSelection, computerSelection));
            //console.log(`Player Score: ${playerScore}`);
            //console.log(`Computer Score: ${computerScore}`);
            console.log(playRound(playerSelection, computerSelection));
            if (result === `You win! ${playerSelection} beats ${computerSelection}`) {
                playerScore++;

            } else if (result === `You lose! ${computerSelection} beats ${playerSelection}`) {
                computerScore++;
            }
            alert(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
            i++
            console.log(i);
        });
    });

    //}// 5 rounds exit bracket
    /*
                if(playerScore > computerScore){
                    alert("You win the game!");
                    console.log("..........");
                    console.log("Game Over!");
                    console.log("..........");
                    console.log("You win!");
                } else if (playerScore < computerScore){
                    alert("You lose the game! ");
                    console.log("..........");
                    console.log("Game Over!");
                    console.log("..........");
                    console.log("You lose!");
                } else if (playerScore === computerScore){
                    alert("The game is a draw!");
                    console.log("..........");
                    console.log("Game Over!")
                    console.log("..........");
                    console.log("Draw!");
                }
    */
}

//RUN GAME
game();
