let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector (".score-board")
const result_p = document.querySelector (".result > p");
var play_again = document.getElementById("playAgain") ;
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter ==='r') {
        return "Rock";}
    if (letter ==='p') {
        return "Paper";}
    else return "Scissors";   
}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    userWin();
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose!`;
    computerWin();
}


function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} draws with ${convertToWord(computerChoice)}. Draw!`;
}

function reset(){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    play_again.style.display = "none";
}

function userWin(){
    if (userScore == 5){ 
    result_p.innerHTML = "You win!";
    play_again.style.display = "block";
    computerScore = 0;
    userScore = 0;
    }

}

function computerWin(){
    if (computerScore == 5){
    result_p.innerHTML = "You lose!";
    play_again.style.display = "block";      
    computerScore = 0;
    userScore = 0;
    }
}


function game (userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
        break;
        case "ss":
        case "pp":
        case "rr":
            draw(userChoice, computerChoice);
        break;
    }
}




function main(){
    rock_div.addEventListener('click', function() {
        game('r')
    })
    paper_div.addEventListener('click', function() {
        game('p')
    })
    scissors_div.addEventListener('click', function() {
        game('s')
    })
    play_again.addEventListener('click', function() {
        reset();
    })

}

main();

