function getComputerChoice() {
    let generatedNum = Math.floor(Math.random() * 3) + 1;
    if (generatedNum == 1) return 'Rock';
    else if (generatedNum == 2) return 'Paper';
    else return 'Scissors';
}

let computerScore = 0;
let playerScore = 0;

function playRound(ps, cs, currResult) {
    if (ps === cs) {
        currResult.classList.add('tie');
        return `Tie! Both Used ${ps}.`;
    } 
    else if (ps === 'Rock' && cs === 'Scissors' || ps === 'Paper' && cs === 'Rock' || ps === 'Scissors' && cs === 'Paper') {
        playerScore++;
        document.getElementById("ps").textContent++;
        currResult.classList.add('correct');
        return `You Won! ${ps} Beats ${cs}.`;
    }
    else {
        computerScore++;
        currResult.classList.add('wrong');
        document.getElementById("cs").textContent++;
        return `You Lost! ${cs} Beats ${ps}.`;
    } 
}

function game() {
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();

    if (document.querySelectorAll('.playImg')) {
        document.querySelectorAll('.playImg').forEach(pic => {
            pic.remove();
        })
    }

    const playerChoiceImage = document.querySelector('.pc');
    const compChoiceImage = document.querySelector('.cc');

    const pimg = document.createElement('img');
    pimg.classList.add('playImg');
    pimg.src = `./images/${playerSelection.toLowerCase()}.png`

    const cimg = document.createElement('img');
    cimg.classList.add('playImg');
    cimg.src = `./images/${computerSelection.toLowerCase()}.png`

    playerChoiceImage.appendChild(pimg);
    compChoiceImage.appendChild(cimg);

    const container = document.querySelector('.container');
    if (document.querySelector('.round_result')) {
        container.removeChild(container.lastElementChild);
    }
    const currResult = document.createElement('p');
    currResult.classList.add('round_result');
    currResult.textContent = playRound(playerSelection, computerSelection, currResult);
    container.appendChild(currResult);

    if (playerScore == 5 || computerScore == 5){
        choiceList.forEach(choice => {
            choice.removeEventListener('click', game);
        });
        const result = document.createElement('p');
        result.classList.add('final_result');
        result.textContent = (computerScore > playerScore)? "You Lost! AI Will Take Your Job :(" : "Congratulations! You Beat The AI :)";
        (computerScore > playerScore)? result.classList.add('wrong') : result.classList.add('correct');
        document.body.lastElementChild.lastElementChild.appendChild(result);

        const reload = document.createElement('img');
        reload.src = "./images/reload.png";
        reload.classList.add('reload');
        document.body.lastElementChild.lastElementChild.appendChild(reload);

        reload.addEventListener('click', () => {
            document.body.lastElementChild.lastElementChild.lastElementChild.remove();
            document.body.lastElementChild.lastElementChild.lastElementChild.remove();
            document.querySelectorAll('.playImg').forEach(pic => {
                pic.remove();
            })
            container.removeChild(container.lastElementChild);
            computerScore = 0;
            playerScore = 0;
            document.getElementById("ps").textContent = 0;
            document.getElementById("cs").textContent = 0;
            const choiceList = document.querySelectorAll('.choice');
            choiceList.forEach(choice => {
                choice.addEventListener('click', game);
            });
        });
    }
}

const choiceList = document.querySelectorAll('.choice');

choiceList.forEach(choice => {
    choice.addEventListener('click', game);
});