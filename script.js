function computerPlay() {
    let min = 1;
    let max = 3;
    min = Math.ceil(min);
    max = Math.floor(max);
    let option = Math.floor(Math.random() * (max - min + 1) + min);

    if (option === min) {
        return "Rock";
    } else if (option === max) {
        return "Scissors";
    } else {
        return "Paper";
    }

}


function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    let didYouWin = (playerSelection === "Scissors" && computerSelection === "Paper") ||
                    (playerSelection === "Paper" && computerSelection === "Rock") || 
                    (playerSelection === "Rock" && computerSelection === "Scissors");
    
    return didYouWin;
}

function capitalize(value) {
    let rest = value.substring(1, value.length).toLowerCase();
    let start = value.charAt(0).toUpperCase();
    return start + rest;
}

function isDraw(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    let draw =  (playerSelection === "Scissors" && computerSelection === "Scissors") ||
                  (playerSelection === "Paper" && computerSelection === "Paper") || 
                  (playerSelection === "Rock" && computerSelection === "Rock");

    return draw;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let computerSelection = computerPlay();

        if (playRound(playerSelection, computerSelection)) {
            console.log("You Win! " + capitalize(playerSelection) + " beats " + computerSelection);
        } else if (isDraw(playerSelection, computerSelection)) {
            console.log("You Drew! You picked the same option as the computer");
        } else {
            console.log("You Lose! " +  computerSelection + " beats " + capitalize(playerSelection));
        }
    }
}

game();



