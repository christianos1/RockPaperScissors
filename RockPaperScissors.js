function rps = prompt("Pick Rock or Paper or Scissors", "");
function rps1 = rps.toLowerCase();

function rps2 = Math.floor(Math.random() * 3) + 1;

function result()

if (rps1 = "rock") {
    let rps3 = (1);
} else if (rps1 = "paper") {
    let rps3 = (2);
} else if (rps1 = "scissors") {
    let rps3 = (3);
} else let rps3 = (4);    

if (rps3 = 1 && rps2 = 2) {
    let result = ("I chose paper. You lose!");
} else if (rps3 = 2 && rps2 = 3) {
    let result = ("I chose scissors. You lose!");
} else if (rps3 = 3 && rps2 = 1) {
    let result = ("I chose rock. You lose!");
} else if (rps3 = 2 && rps2 = 1) {
    let result = ("I chose rock. You win!");
} else if (rps3 = 3 && rps2 = 2) {
    let result = ("I chose paper. You win!");
} else if (rps3 = 1 && rps2 = 3) {
    let result = ("I chose scissors. You win!");
} else if (rps3 = rps2) {
    let result = ("I chose the same. Tie!");
} else let result = ("Invalid answer");

alert(result);