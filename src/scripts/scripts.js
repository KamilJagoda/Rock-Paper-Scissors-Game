var userScore = 0;
var computerScore = 0;
var userScoreSpan = document.getElementById("userScore");
var computerScoreSpan = document.getElementById("computerScore");
var rock_icon = document.getElementById("rock");
var paper_icon = document.getElementById("paper");
var scissors_icon = document.getElementById("scissors");
var resultDiv = document.getElementById("resultDiv");

function getComputerChoice() {
    var choices = ['rock','paper','scissors'];
    var random = Math.floor(Math.random() * 3);
    return choices[random];
}
function game(userChoice) {
    var computerChoice = getComputerChoice();
    console.log("user choice => ", userChoice);
    console.log("computer choice => ", computerChoice);
    if(computerChoice === userChoice) {
        draw(userChoice, computerChoice);
    } else if (userChoice+computerChoice == "rockscissors" || userChoice+computerChoice == "paperrock" || userChoice+computerChoice == "scissorspaper") {
        win(userChoice, computerChoice);
    } else {
        lose(userChoice, computerChoice);
    }
}
function draw(userChoice) {
    var userChoice_div = document.getElementById(userChoice);
    resultDiv.innerHTML = "You used same power. Draw!";
    document.getElementById(userChoice).classList.add('draw-choice');
    setTimeout(function () { userChoice_div.classList.remove('draw-choice')}, 500);
}

function lose(userChoice, computerChoice) {
    var userChoice_div = document.getElementById(userChoice);
    computerScore ++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = userChoice + " lose to " + computerChoice + ". You lose!";
    document.getElementById(userChoice).classList.add('wrong-choice');
    setTimeout(function () { userChoice_div.classList.remove('wrong-choice')}, 500);
}

function win(userChoice, computerChoice) {
    var userChoice_div = document.getElementById(userChoice);
    userScore ++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
    document.getElementById(userChoice).classList.add('good-choice');
    setTimeout(function () { userChoice_div.classList.remove('good-choice')}, 500);
}

function main() {
    rock_icon.addEventListener("click", function () {
        game("rock");
    });

    paper_icon.addEventListener("click", function () {
        game("paper");
    });

    scissors_icon.addEventListener("click", function () {
        game("scissors");
    });
}
main();

