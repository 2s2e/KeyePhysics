function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function computeGame(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    
    if(playerChoice == 'rock') {
        if(computerChoice == 'paper') {
            return 'You lose! Paper beats rock.';
        } else {
            return 'You win! Rock beats scissors.';
        }
    }
    else if(playerChoice == 'paper') {
        if(computerChoice == 'scissors') {
            return 'You lose! Scissors beats paper.';
        } else {
            return 'You win! Paper beats rock.';
        }
    }
    else if(playerChoice = 'scissors') {
        if(computerChoice == 'rock') {
            return 'You lose! Rock beats scissors.';
        } else {
            return 'You win! Scissors beats paper.';
        }
    }
}

function playGame() {
    const playerChoice = prompt('Rock, paper, or scissors?').toLowerCase();
    const computerChoice = computerPlay();
    return computeGame(playerChoice, computerChoice);
}

console.log(playGame());