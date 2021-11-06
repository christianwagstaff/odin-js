const rpsChoices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let playerHighScoreVal = 0;
let computerHighScoreVal = 0;
let rock = 'far fa-hand-rock'
let paper = 'far fa-sticky-note';
let scissors = 'far fa-hand-scissors';

const rockChoice = document.getElementById('rockBtn');
const paperChoice = document.getElementById('paperBtn');
const scissorsChoice = document.getElementById('scissorsBtn');
const playerHighScore = document.getElementById('playerHighScore');
const computerHighScore = document.getElementById('computerHighScore');
const playerScoreHTML = document.getElementById('playerScore');
const computerScoreHTML = document.getElementById('computerScore');
const resetButton = document.getElementById('reset');
const playerCurrentPickDiv = document.getElementById('playerCurrentPickDiv');
const computerCurrentPickDiv = document.getElementById('computerCurrentPickDiv');
const playerCurrentPick = document.getElementById('playerCurrentPick');
const computerCurrentPick = document.getElementById('computerCurrentPick');


rockChoice.addEventListener('click', () => game('Rock'));
paperChoice.addEventListener('click', () => game('Paper'));
scissorsChoice.addEventListener('click', () => game('Scissors'));
resetButton.addEventListener('click', () => resetGame());

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
        updateTotalGamesWon();
        updateHighScoreDispalay();
        resetCurrentScore();
    }
    let computerChoice = computerPlay();
    let winner = playRound(playerChoice, computerChoice)
    if (winner === 'playerWin') {
        playerScore += 1;
    } else if (winner === 'computerWin') {
        computerScore += 1;
    }
    updateCurrentPick(playerCurrentPick, playerChoice);
    updateCurrentPick(computerCurrentPick, computerChoice); 
    updateCurrentScoreDisplay();
    showCurrentPick();
}

function updateCurrentScoreDisplay() {
    playerScoreHTML.innerHTML = playerScore;
    computerScoreHTML.innerHTML = computerScore;
}

function updateHighScoreDispalay() {
    playerHighScore.innerHTML = playerHighScoreVal;
    computerHighScore.innerHTML = computerHighScoreVal;
}

function updateTotalGamesWon() {
    if (playerScore === 5) {
        playerHighScoreVal += 1;
    } else {
        computerHighScoreVal += 1;
    }
}

function resetCurrentScore() {
    playerScore = 0;
    computerScore = 0;
}

function resetHighScore() {
    playerHighScoreVal = 0;
    computerHighScoreVal = 0;
}

function resetGame() {
    resetCurrentScore();
    resetHighScore();
    updateCurrentScoreDisplay();
    updateHighScoreDispalay();
    hideCurrentPick();
}

function showCurrentPick() {
    playerCurrentPickDiv.className = '';
    computerCurrentPickDiv.className = '';
}

function hideCurrentPick() {
    playerCurrentPickDiv.className = 'hidden';
    computerCurrentPickDiv.className = 'hidden';
}

function updateCurrentPick(player, choice) {
    if (choice === 'Rock') {
        player.className = rock;
    } else if (choice === "Paper") {
        player.className = paper;
    } else {
        player.className = scissors;
    }
}