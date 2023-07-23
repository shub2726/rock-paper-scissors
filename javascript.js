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
        document.getElementById("ps").textContent++;
        return `You Won! ${ps} Beats ${cs}.`;
    }
    else {
        computerScore++;
        document.getElementById("cs").textContent++;
        return `You Lost! ${cs} Beats ${ps}.`;
    } 
}

function game() {
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();
    document.querySelector('#curr_round').textContent = playRound(playerSelection, computerSelection);
    if (playerScore == 5 || computerScore == 5){
        choiceList.forEach(choice => {
            choice.removeEventListener('click', game);
        });
        const result = document.createElement('p');
        result.textContent = (computerScore > playerScore)? "You Lost!" : "You Won!";
        document.body.appendChild(result);
    }
}

const choiceList = document.querySelectorAll('.choice');

choiceList.forEach(choice => {
    choice.addEventListener('click', game);
});
/*
if (computerScore == playerScore) alert(`Tie! Player: ${playerScore} | AI: ${computerScore}`);
else if (computerScore > playerScore) alert(`You Lost! Player: ${playerScore} | AI: ${computerScore}`);
else alert(`You Won! Player: ${playerScore} | AI: ${computerScore}`);*/