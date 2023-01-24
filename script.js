let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML = `${(userChoice)}(user) beats ${(computerChoice)}(comp). You win! 🔥`;
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML = `${(userChoice)}(user) loses to ${(computerChoice)}(comp). You lost... 💩`;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${(userChoice)}(user) equals ${(computerChoice)}(comp). It's a draw. 🤯`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("Rock");
    })

    paper_div.addEventListener('click', function() {
        game("Paper");
    })

    scissors_div.addEventListener('click', function() {
        game("Scissors");
    })
}

main();