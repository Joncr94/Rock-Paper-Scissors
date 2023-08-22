const playertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");
const playerscore = document.querySelector("#playerscore");
const computerscore = document.querySelector("#computerscore");
const reset = document.querySelector("#gamereset");
const scorereset = document.querySelector("#scorereset");
const choicebuttons = document.querySelectorAll(".choicebutton");
const pmscore = document.querySelector("#pmscore");
const cmscore = document.querySelector("#cmscore");
let player;
let computer;
let result;
let score = 0;
let computerscores = 0;
let cmscores = 0;
let pmscores = 0;
let gameEnded = false;

scorereset.addEventListener("click", () => {
    score = 0;
    computerscores = 0;
    cmscores = 0;
    pmscores = 0;
    gameEnded = false;
    resulttext.textContent = "Result";
    playerscore.textContent = `Your Score: ${score}`;
    computerscore.textContent = `Computer Scores: ${computerscores}`;
    pmscore.textContent = `Player Match wins: ${pmscores}`
    cmscore.textContent = `Computer Match wins: ${cmscores}`
    playertext.textContent = "Player:";
    computertext.textContent = "Computer:";
    });    


reset.addEventListener("click", () => {
score = 0;
computerscores = 0;
gameEnded = false;
resulttext.textContent = "Result";
playerscore.textContent = `Your Score: ${score}`;
computerscore.textContent = `Computer Scores: ${computerscores}`;
pmscore.textContent = `Player Match wins: ${pmscores}`
cmscore.textContent = `Computer Match wins: ${cmscores}`
playertext.textContent = "Player:";
computertext.textContent = "Computer:";
});

choicebuttons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playertext.textContent = `Player: ${player}`;
    computertext.textContent = `Computer: ${computer}`;
    result = checkWinner();
    resulttext.textContent = result;
    updateScore(result);
    playerscore.textContent = `Your Score: ${score}`
    computerscore.textContent = `Computer Scores: ${computerscores}`
    pmscore.textContent = `Player Match wins: ${pmscores}`
    cmscore.textContent = `Computer Match wins: ${cmscores}`

}));
function computerTurn() {
    const randNum = Math.floor(Math.random()*3) + 1;
    switch(randNum){
        case 1: 
        computer = "rock";
        break;
        case 2: 
        computer = "paper";
        break;
        case 3: 
        computer = "scissors";
        break;
    }
}
function checkWinner() {
    if (player==computer && gameEnded == false){
        return "Draw!";
    }
    else if (computer == "rock" && gameEnded === false){
        return (player == "paper") ? "You Win!" : "You Lose"
    }
    else if (computer == "paper" && gameEnded == false){
        return (player == "scissors") ? "You Win!" : "You Lose"
    }
    else if (computer == "scissors" && gameEnded == false){
        return (player == "rock") ? "You Win!" : "You Lose"
    }
}
function updateScore(result){
  
    if (result=== "You Win!"){
        score++;
    } else if (result ==="You Lose"){
        computerscores++;
    }
    if (score === 10 && gameEnded == false) {
        resulttext.textContent = "You Won the match";
        pmscores++;
        gameEnded = true;
        return;
    } else if (computerscores === 10 && gameEnded == false) {
        resulttext.textContent = "You Lost the match";
        cmscores++;
        gameEnded = true;
        return;
    }
    else if (computerscores === 10 && gameEnded == true) {
        resulttext.textContent = "You Lost the match";
        return;
    }
    else if (score === 10 && gameEnded == true) {
        resulttext.textContent = "You Won the match";
        return;
    }
}

