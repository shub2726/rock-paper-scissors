function getComputerChoice() {
    let generatedNum = Math.floor(Math.random() * 3) + 1;
    if (generatedNum == 1) return 'Rock';
    else if (generatedNum == 2) return 'Paper';
    else return 'Scissors';
}

let computerScore = 0;
let playerScore = 0;

function playRound(ps, cs) {
    if (ps === cs) return `Tie! Both Used ${ps}.`;
    else if (ps === 'Rock' && cs === 'Scissors' || ps === 'Paper' && cs === 'Rock' || ps === 'Scissors' && cs === 'Paper') {
        playerScore++;
        return `You Won! ${ps} Beats ${cs}.`;
    }
    else {
        computerScore++;
        return `You Lost! ${cs} Beats ${ps}.`;
    } 
}

function game() {
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock/Paper/Scissors: ").toLowerCase();
        playerSelection = playerSelection.charAt(0).toUpperCase()
                        + playerSelection.slice(1, playerSelection.length);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();

if (computerScore == playerScore) alert(`Tie! Player: ${playerScore} | AI: ${computerScore}`);
else if (computerScore > playerScore) alert(`You Lost! Player: ${playerScore} | AI: ${computerScore}`);
else alert(`You Won! Player: ${playerScore} | AI: ${computerScore}`);