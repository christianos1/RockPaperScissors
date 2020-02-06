var choose = prompt("Pick rock, paper or scissors", "");
console.log(choose);
choose = choose.toLowerCase();

var computer = Math.round(Math.random() * 3);
console.log(computer);
// 0=rock; 1=paper; 2=scissors

var declare;

if (computer == 0) {
    declare = "rock";
}
else if (computer == 1) {
    declare = "paper";
}
else declare = "scissors";
console.log(declare);

document.write("I choose " + declare + " .");


if ((choose == "rock" && computer == 0) || (choose == "paper" && computer == 1) || (choose == "scissors" && computer == 2)) {
document.write("Tie!");
}
else if ((choose == "rock" && computer == 2) || (choose == "paper" && computer == 0) || (choose == "scissors" && computer == 1)) {
document.write("You win!");
}
else if ((choose == "rock" && computer == 1) || (choose == "paper" && computer == 2) || (choose == "scissors" && computer == 0)) {
document.write("You lose!");
}