let userScore = 0;
let computerScore = 0;
let endFlag = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function computerPlay() {
    const options = ["r", "p", "s"];
    const random = Math.floor(Math.random() * options.length);
    console.log(random, options[random]);
    return options[random];
}

function translateLetter(letter) {
    if (letter === "r")
      return "Rock";
    if (letter === "p")
      return "Paper";
    return "Scissors";
}

function winHandler(user,comp){
  if (endFlag != 1) {
    userScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    checkEnd(userScore,computerScore);
    result_div.innerHTML = `${translateLetter(user)} beats ${translateLetter(comp)}, You Win!`
  }
  else
    endMsg();
}

function loseHandler(user,comp){
  if (endFlag != 1) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    checkEnd(userScore,computerScore);
    result_div.innerHTML = `${translateLetter(comp)} beats ${translateLetter(user)}, You Lose!`
  }
  else
    endMsg();
}

function drawHandler(user,comp){
  if (endFlag != 1) {
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${translateLetter(comp)} draws with ${translateLetter(user)}, its a draw!`

  }
  else
    endMsg();
}

function checkEnd(userScore,computerScore) {
    if (userScore == 5 || computerScore == 5) {
      endFlag = 1;
      result_div.innerHTML = "Game ends, First to five won!"
    }
}

function endMsg () {
  if (computerScore == 5) {
      result_div.innerHTML = "Game ends, computer won!"
  }
  else {
      result_div.innerHTML = "Game ends, user won!"
  }
  return;
}

function singleRound(userChoice, computerChoice) {
    const u = userChoice.toLowerCase();
    const c = computerChoice.toLowerCase();
    switch (u + c) {
        case "rs":
        case "pr":
        case "sp":
            winHandler(u,c);
            break;
        case "rp":
        case "ps":
        case "sr":
            loseHandler(u,c);
            break;
        case "rr":
        case "pp":
        case "ss":
            drawHandler(u,c);
            break;
    }
}

function handleClick(userChoice) {
  const computerChoice = computerPlay();
  singleRound(userChoice,computerChoice);
}

function main() {
  rock_div.addEventListener('click', ()=> { handleClick("r") })
  paper_div.addEventListener('click', ()=> { handleClick("p") })
  scissors_div.addEventListener('click', ()=> { handleClick("s") })
}

main();
