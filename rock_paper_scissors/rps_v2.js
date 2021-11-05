const rpsChoices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

const rockChoice = document.getElementById('rockBtn');
const paperChoice = document.getElementById('paperBtn');
const scissorsChoice = document.getElementById('scissorsBtn');

rockChoice.addEventListener('click', () => game('Rock'));
paperChoice.addEventListener('click', () => game('Paper'));
scissorsChoice.addEventListener('click', () => game('Scissors'));

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

function game(playerChoice) {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
    }
    let winner = playRound(playerChoice, computerPlay())
    if (winner === 'playerWin') {
        playerScore += 1;
    } else if (winner === 'computerWin') {
        computerScore += 1;
    } 
    updateCurrentScore(playerScore, computerScore);
}

function updateCurrentScore(playerScore, computerScore) {
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
}
