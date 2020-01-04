let rps = prompt("Pick Rock or Paper or Scissors", "");

let rps2 = Math.floor(Math.random() * 3) + 1;

if (rps = "Rock", "rock", "ROCK") {
    let rps = 1;
} else if (rps = "Paper", "paper", "PAPER") {
    let rps = 2;
} else if (rps = "Scissors", "scissors", "SCISSORS") {
    let rps = 3;
} else let result = "Invalid Selection";    

if (rps = 1, rps2 = 2) {
    let result = ("I chose paper. You lose!");
} else if (rps = 2, rps2 = 3) {
    let result = ("I chose scissors. You lose!");
} else if (rps = 3, rps2 = 1) {
    let result = ("I chose rock. You lose!");
} else if (rps = 2, rps2 = 1) {
    let result = ("I chose rock. You win!");
} else if (rps = 3, rps2 = 2) {
    let result = ("I chose paper. You win!");
} else if (rps = 1, rps2 = 3) {
    let result = ("I chose scissors. You win!");
} else if (rps = rps2) {
    let result = ("I chose the same. Tie!");
}

alert(result);