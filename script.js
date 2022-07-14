let scoreWin = 0;
let scoreLoss = 0;
let scoreTie = 0;
const validPlays = ["rock", "paper", "scissors"]

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "T"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "L"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "L"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "L"
    } else {
        return "W"
    }
}

function computerPlay() {
    let randNum = Math.floor(Math.random()*3)
    return validPlays[randNum]
}

function playerPick() {
    var isvalidpick = false
    while (isvalidpick != true) {
        var pick = prompt("Your selection:").toLocaleLowerCase()
        var isvalidpick = validatePlay(pick)
    }
    return pick
}

function validatePlay(play) {
    if (validPlays.indexOf(play) >= 0) { // Check if player's pick is valid
        return true
    }
    return false
}

function game() {
    for (let i = 0; i < 3; i++) {
        let result = playRound(playerPick(), computerPlay());
        switch (result) {
            case 'W': 
                console.log("WIN")
                scoreWin += 1;
                break;
            case 'L': 
                console.log("LOST")
                scoreLoss += 1;
                break;
            case 'T': 
                console.log("TIE")
                scoreTie += 1;
                break;
        }
        
    }
    console.log("Wins: " + scoreWin + " Lost: " + scoreLoss + " Tied: " + scoreTie)
}

//game();