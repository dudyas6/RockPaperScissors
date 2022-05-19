function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    console.log(random, options[random]);
    return options[random];
}

function singleRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();
    const c = computerSelection.toLowerCase();
    if (p == "rock") {
        if (c == "rock")
            return ("Draw, Both chose Rock!")
        else if (c == "paper")
            return ("You lose! Paper beats Rock!")
        else
            return ("You win! Rock beats Scissors!")
    }
    if (p == "paper") {
        if (c == "rock")
            return ("You lose! Paper beats Rock!")
        else if (c == "paper")
            return ("Draw, Both chose Paper!")
        else
            return ("You win! Paper beats Rock!")
    }
    if (p == "scissors") {
        if (c == "rock")
            return ("You lose! Rock beats Scissors!")
        else if (c == "paper")
            return ("You win! Scissors beats Paper!")
        else
            return ("Draw, Both chose Scissors!")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const player = prompt("Please enter your selection: ");
        const computer = computerPlay();
        console.log(singleRound(player, computer));
    }
}