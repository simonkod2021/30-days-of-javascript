
const correctNumber = 67;

function guessNumber(){

    const guess = document.getElementById("guessInput").value;
    const numberGuess = Number(guess);

    if(numberGuess === correctNumber){
        window.alert("You guessed it! correct number was " + correctNumber)
    }else if (numberGuess <= 0){
        window.alert("You cant guess less than or equal to 0")
    }else if (numberGuess >= 1 && numberGuess < 10){
        window.alert("What a bad guess, very far of!")
    }else if (numberGuess >= 10 && numberGuess < 20){
        window.alert("Guess is very far away!")
    }else if (numberGuess >= 20 && numberGuess < 30){
        window.alert("Very much higher!")
    }else if(numberGuess >= 30 && numberGuess < 40){
        window.alert("Alot higher!")
    }else if(numberGuess >= 40 && numberGuess < 50){
        window.alert("Much higher!")
    }else if(numberGuess >= 50 && numberGuess < 60){
        window.alert("Higher!")
    }else if(numberGuess >= 60 && numberGuess < 70){
        window.alert("A little higher!")
    }else if(numberGuess >= 70 && numberGuess < 80){
        window.alert("A little less!")
    }else if(numberGuess >= 80 && numberGuess < 90){
        window.alert("Less!")
    }else if(numberGuess >= 90 && numberGuess < 100){
        window.alert("Much lower!")
    }else if(numberGuess >= 100){
        window.alert("Very much lower!")
    }
} 