let computerScore = 0;
let humanScore = 0;
let round = 1;

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice);

playRound(humanChoice, computerChoice);

console.log(`Human: ${humanScore} Computer: ${computerScore}`)

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "rock"
    } else if (choice === 2) {
        return "paper"

    } else if (choice === 3) {
        return "scissors"

    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You won!!${humanChoice} beats ${computerChoice}`);
        humanScore ++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You won!!${humanChoice} beats ${computerChoice}`);
        humanScore ++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You won!!${humanChoice} beats ${computerChoice}`);
        humanScore ++;
    } else if (humanChoice === computerChoice) {
        console.log(`Its a draw!! You both chose ${humanChoice} `);
    } else {
        console.log(`You lost... ${humanChoice} loses to ${computerChoice}`);
        computerScore ++;
    }
}