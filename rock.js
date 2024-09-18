// Function to get computer's choice
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "Rock";
    } else if (randomNumber < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Function to get human's choice
function getHumanChoice() {
    const userChoice = prompt("Choose Rock, Paper, or Scissors");
    if (userChoice === null) {
        return ""; // Handle the case when user cancels the prompt
    }
    const normalizedChoice = userChoice.trim().toLowerCase();
    if (normalizedChoice === 'rock') {
        return "Rock";
    } else if (normalizedChoice === 'paper') {
        return "Paper";
    } else if (normalizedChoice === 'scissors') {
        return "Scissors";
    } else {
        return ""; // Handle invalid choices
    }
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    // Check if humanChoice is valid
    if (humanChoice === "") {
        return "Please pick a valid option.";
    }
    if (humanChoice === 'Rock' && computerChoice === 'Scissors' ||
        humanChoice === 'Paper' && computerChoice === 'Rock' ||
        humanChoice === 'Scissors' && computerChoice === 'Paper') {
        return "You Have Won";
    } else if (computerChoice === 'Rock' && humanChoice === 'Scissors' ||
               computerChoice === 'Paper' && humanChoice === 'Rock' ||
               computerChoice === 'Scissors' && humanChoice === 'Paper') {
        return "Computer has Won";
    } else {
        return "It's a tie";
    }
}

// Function to play the entire game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        // Update scores based on the result
        if (result === "You Have Won") {
            humanScore++;
        } else if (result === "Computer has Won") {
            computerScore++;
        }

        // Show results for each round
        alert("Human chose: " + (humanChoice || "No valid choice made"));
        alert("Computer chose: " + computerChoice);
        alert(result);
    }

    // Final result
    let finalMessage = "COM: " + computerScore + "\n" +
                       "Human: " + humanScore + "\n";

    if (humanScore > computerScore) {
        finalMessage += "You Win The Game!!!!";
    } else if (humanScore === computerScore) {
        finalMessage += "You Draw with Computer";
    } else {
        finalMessage += "Sorry You Lost The Game";
    }

    alert(finalMessage);
}

playGame();
