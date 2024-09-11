//writing the logic to get computer choice for the game rock, paper, scissors
function getComputerChoice () {
    const randomNumber = Math.random();
    if (randomNumber < 0.33 && randomNumber >= 0) {
        return "Rock";
    } else if (randomNumber > 0.33 && randomNumber <=0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice())

//writing the logic to get human choice
function getHumanChoice () {
    const userChoice = prompt("Choose the number 1 for Rock, 2 for Paper, 3 for scissors");
    if (userChoice == 1) {
        return "Rock";
    } else if (userChoice == 2) {
        return "Paper";
    } else if (userChoice == 3) {
        return "Scissors";
    } else {
        return "Please pick a valid number, either 1, 2 or 3"
    }
}
console.log(getHumanChoice())
