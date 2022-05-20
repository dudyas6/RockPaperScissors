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
const restart = document.getElementById('playagain');

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
    result_div.innerHTML = `${translateLetter(user)} beats ${translateLetter(comp)}, You Win!`
    document.getElementById(user).classList.add("green-glow");
    setTimeout( function() {document.getElementById(user).classList.remove('green-glow') }, 600);

    checkEnd(userScore,computerScore);
  }
  else
    endMsg();
}

function loseHandler(user,comp){
  if (endFlag != 1) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${translateLetter(comp)} beats ${translateLetter(user)}, You Lose!`
    document.getElementById(user).classList.add("red-glow");
    setTimeout( function() {document.getElementById(user).classList.remove('red-glow') }, 600);
    checkEnd(userScore,computerScore);
  }
  else
    endMsg();
}

function drawHandler(user,comp){
  if (endFlag != 1) {
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${translateLetter(comp)} draws with ${translateLetter(user)}, its a draw!`
    document.getElementById(user).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(user).classList.remove('grey-glow')}, 600);

  }
  else
    endMsg();
}

function checkEnd(userScore,computerScore) {
    if (userScore == 5 || computerScore == 5) {
      endFlag = 1;
      endMsg();
    }
}

function endMsg () {
  if (computerScore == 5) {
      result_div.innerHTML = "Game ends, computer won!, click Restart to play again."
  }
  else {
      result_div.innerHTML = "Game ends, user won!, click Restart to play again."
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

function resetHandler() {
  userScore = 0;
  computerScore = 0;
  endFlag = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = "Choose: Rock, Paper, Scissors!";
}

function main() {
  rock_div.addEventListener('click', ()=> { handleClick("r") })
  paper_div.addEventListener('click', ()=> { handleClick("p") })
  scissors_div.addEventListener('click', ()=> { handleClick("s") })
  restart.addEventListener('click', () => { resetHandler() })
}

main();
