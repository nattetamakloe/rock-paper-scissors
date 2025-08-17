const choice = getComputerChoice();

console.log(choice)

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}