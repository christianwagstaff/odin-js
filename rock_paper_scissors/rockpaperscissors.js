const rpsChoices = ['Rock', 'Paper', 'Scissors'];

function addSpaceArray(array) {
    return array.join(', ');
}

function computerPlay() {
    choice = Math.floor(Math.random() * rpsChoices.length);
    return rpsChoices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        window.alert(`Tie! You both picked ${computerSelection}`)
        return `tie`;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors' 
    || playerSelection == 'Paper' && computerSelection == 'Rock' 
    || playerSelection == 'Scissors' && computerSelection == 'Paper') {
        window.alert(`You Win! ${playerSelection} beats ${computerSelection}`)
        return 'playerWin';
    } else {
        window.alert(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return 'computerWin';
    }
}
function playerChoice() {
    let playerChoice = window.prompt(`Select one of the following: ${addSpaceArray(rpsChoices)}`);
    playerChoice = playerChoice.toLowerCase()
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1);
    return playerChoice;
}

function displayCurrentScore(playerScore, computerScore) {
    return (window.alert(`
    Player Score: ${playerScore} 
    Computer Score: ${computerScore}`));
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let winner = playRound(playerChoice(), computerPlay())
        if (winner === 'playerWin') {
            playerScore += 1;
        } else if (winner === 'computerWin') {
            computerScore += 1;
        } 
        displayCurrentScore(playerScore, computerScore);
        updateCurrentScore(playerScore, computerScore);
    }
}

function updateCurrentScore(playerScore, computerScore) {
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
}