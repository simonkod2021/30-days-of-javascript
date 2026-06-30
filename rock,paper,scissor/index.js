const choices = ["Sten", "Sax","Påse"];

const buttons = document.querySelectorAll('button')
const resultWinner = document.getElementById('result')

function computerMakeChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    const computerRandomChoice = choices[computerChoice];
    return computerRandomChoice;
}


function userMakeChoice(){
    let choice = "Inget valt ännu"
    console.log(choice);
    buttons.forEach((button, index) =>{
        button.addEventListener("click", function(){
            choice = choices[index]
            const computerChoice = computerMakeChoice();
            const result = calculateWinner(choice, computerChoice)
            resultWinner.textContent = result

            resultWinner.classList.remove('animated');
            void resultWinner.offsetWidth;
            resultWinner.classList.add('animated');
            setTimeout(() =>{
                resultWinner.classList.remove('animated')
            }, 5000);
        })
    })
    resultWinner.classList.add('animated')
    return choice;
   }
function calculateWinner(a, b ){
   if(a == choices[0] && b == choices[0]){
    return "User selected: " + a + " , The Computer selected: " + b + " That was a draw!"
   }
   if(a == choices[1] && b == choices[1]){
    return "User selected: " + a + " , The Computer selected: " + b + " That was a draw!"
   }
   if(a == choices[2] && b == choices[2]){
    return "User selected: " + a + " , The Computer selected: " + b + " That was a draw!"
   }
   if(a == choices[0] && b == choices[1]){
    return "User selected: " + a + " , The Computer selected: " + b + " The user won!"
   }
   if(a == choices[1] && b == choices[2]){
    return "User selected: " + a + " , The Computer selected: " + b + " The user won!"
   }
   if(a == choices[2] && b == choices[0]){
    return "User selected: " + a + " , The Computer selected: " + b + " The user won!"
   }
   if(a == choices[0] && b == choices[2]){
    return "User selected: " + a + " , The Computer selected: " + b + " The computer won!"
   }
   if(a == choices[1] && b == choices[0]){
    return "User selected: " + a + " , The Computer selected: " + b + " The computer won!"
   }
   if(a == choices[2] && b == choices[1]){
    return "User selected: " + a + " , The Computer selected: " + b + " The computer won!"
   }
}
userMakeChoice();


