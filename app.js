let playerScoreVar = 0;
let computerScoreVar = 0;
let gamesPlayedVar = 0;

const computerScoreElement = document.getElementById("computerscore");
const playerScoreElement = document.getElementById("playerscore");
const computerChoiceElement = document.getElementById("computerchoice");
const playerChoiceElement = document.getElementById("playerchoice");
const gamesPlayedElement = document.getElementById("GamesPlayed");
const WhoWin = document.getElementById("gameOutcome");

const buttonsElement = document.querySelectorAll(".selection Button");

const game = () =>{
buttonsElement.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        // Random rock paper scissor for the computer and the player
            gamesPlayedVar ++;
            gamesPlayedElement.innerHTML = "Games Played: " + gamesPlayedVar;
            let clickedBtn = e.target.className;
            playerChoiceElement.innerHTML = "Choice: " + clickedBtn;
            let comprand = Math.floor(Math.random()*(4-1)+1);
            let compChoiceStr = gameChoiceDict(comprand);
            computerChoiceElement.innerHTML = "Choice: " + compChoiceStr;

            if (compChoiceStr == clickedBtn){
                WhoWin.innerHTML = "IT'S A TIE";
            }
            else if(compChoiceStr == "rock" & clickedBtn == "paper"){
                playerScoreVar++;
                playerScoreElement.innerHTML = "Wins: " + playerScoreVar;
                WhoWin.innerHTML = "You Won!";
            }
            else if(compChoiceStr == "rock" & clickedBtn == "scissors"){
                computerScoreVar++;
                computerScoreElement.innerHTML = "Wins: " + computerScoreVar;
                WhoWin.innerHTML = "Computer Won!";
            }
            else if(compChoiceStr == "paper" & clickedBtn == "scissors"){
                playerScoreVar++;
                playerScoreElement.innerHTML = "Wins: " + playerScoreVar;
                WhoWin.innerHTML = "You Won!";
            }
            else if(compChoiceStr == "paper" & clickedBtn == "rock"){
                computerScoreVar++;
                computerScoreElement.innerHTML = "Wins: " + computerScoreVar;
                WhoWin.innerHTML = "Computer Won!";
            }
            else if(compChoiceStr == "scissors" & clickedBtn == "rock"){
                playerScoreVar++;
                playerScoreElement.innerHTML = "Wins: " + playerScoreVar;
                WhoWin.innerHTML = "You Won!";
            }
            else if(compChoiceStr == "scissors" & clickedBtn == "paper"){
                computerScoreVar++;
                computerScoreElement.innerHTML = "Wins: " + computerScoreVar;
                WhoWin.innerHTML = "Computer Won!";
            }
    });
});
}

function gameChoiceDict (number){
    switch(number){
        case 1:
            return "scissors";
        case 2:
            return "rock";
        case 3:
            return "paper";
        default:
            return "none";
    }
}

game();
