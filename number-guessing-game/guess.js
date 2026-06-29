
const correctNumber = Number(Math.floor(Math.random() * 100 + 1));
console.log(correctNumber)


function guessNumber(){
    const guess = document.getElementById("guessInput").value;
    const numberGuess = Number(guess);
    const difference = Math.abs(correctNumber - numberGuess);
    if (numberGuess === correctNumber) {
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Congratulations! You guessed the correct number: " + correctNumber;
        resultElement.classList.add("correct");
    }
    else if (difference <= 10) {
        const resultElement = document.getElementById("result");
        resultElement.textContent = "You're very close! Try again.";
        resultElement.classList.remove("correct");
    }
    else if (difference <= 20) {
        const resultElement = document.getElementById("result");
        resultElement.textContent = "You're close! Try again.";
        resultElement.classList.remove("correct");
    }
     else {
        document.getElementById("result").textContent = "You're far from the correct number. Try again.";
    }
    animateResult();
}
function animateResult() {
    const resultElement = document.getElementById("result");
    resultElement.classList.add("animate");
    setTimeout(() => {
        resultElement.classList.remove("animate");
    }, 1000);
}