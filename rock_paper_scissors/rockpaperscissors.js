const rpsChoices = ['Rock', 'Paper', 'Scissors'];
const button = document.querySelector('#playGame');

button.addEventListener('click', game);
button.addEventListener('click', showOptionList);

function addSpaceArray(array) {
    return array.join(', ');
}

function computerPlay() {
    choice = Math.floor(Math.random() * rpsChoices.length);
    return rpsChoices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `tie`;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors' 
    || playerSelection == 'Paper' && computerSelection == 'Rock' 
    || playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'playerWin';
    } else {
        return 'computerWin';
    }
}
function playerChoice() {
    let playerChoice = window.prompt(`Select one of the following: ${addSpaceArray(rpsChoices)}`);
    playerChoice = playerChoice.toLowerCase()
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1);
    return playerChoice;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    //run the game until either the player or computer have 5 points
    while (playerScore < 5 && computerScore < 5) {
        let winner = playRound(playerChoice(), computerPlay())
        if (winner === 'playerWin') {
            playerScore += 1;
        } else if (winner === 'computerWin') {
            computerScore += 1;
        } 
        updateCurrentScore(playerScore, computerScore);
    }
}

function updateCurrentScore(playerScore, computerScore) {
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
}

function getCurrentScore(playerScore, computerScore) {
    return (`Player Score: ${playerScore}
    Computer Score: ${computerScore}`);
}