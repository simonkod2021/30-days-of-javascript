const choices = ["Sten", "Sax","Påse"];

const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');
const resultWinner = document.getElementById('result')

function computerMakeChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    const computerRandomChoice = choices[computerChoice];
    return computerRandomChoice;
}


function userMakeChoice(){
    let choice = "Inget valt ännu"
    console.log(choice);
    rock.addEventListener("click", function(){
    setTimeout(() => {
    resultWinner.classList.remove('animated')
    }, 4000);
    choice = choices[0]
    const computerChoice = computerMakeChoice();
    const result = calculateWinner(choice, computerChoice)
    resultWinner.textContent = result
    resultWinner.classList.add('animated')
   })
   scissor.addEventListener("click", function(){
    setTimeout(() => {
    resultWinner.classList.remove('animated')
    }, 4000);
    let choice = "Inget valt ännu"
    choice = choices[1]
    const computerChoice = computerMakeChoice();
    const result = calculateWinner(choice, computerChoice)
    resultWinner.textContent = result
    resultWinner.classList.add('animated')
   })
   paper.addEventListener("click", function(){
    setTimeout(() => {
    resultWinner.classList.remove('animated')
    }, 4000);
    let choice = "Inget valt ännu"
    choice = choices[2]
    const computerChoice = computerMakeChoice();
    const result = calculateWinner(choice, computerChoice)
    resultWinner.textContent = result
    resultWinner.classList.add('animated')
   })
   return choice;
}
function calculateWinner(a, b ){
   if(a == choices[0] && b == choices[0]){
    return "User selected: " + choices[0] + " Computer selected: " + choices[0] + " That was a draw!"
   }
   if(a == choices[1] && b == choices[1]){
    return "User selected: " + choices[1] + " Computer selected: " + choices[1] + " That was a draw!"
   }
   if(a == choices[2] && b == choices[2]){
    return "User selected: " + choices[2] + " Computer selected: " + choices[2] + " That was a draw!"
   }
   if(a == choices[0] && b == choices[1]){
    return "User selected: " + choices[0] + " Computer selected: " + choices[1] + " The user won!"
   }
   if(a == choices[1] && b == choices[2]){
    return "User selected: " + choices[1] + " Computer selected: " + choices[2] + " The user won!"
   }
   if(a == choices[2] && b == choices[0]){
    return "User selected: " + choices[2] + " Computer selected: " + choices[0] + " The user won!"
   }
   if(a == choices[0] && b == choices[2]){
    return "User selected: " + choices[0] + " Computer selected: " + choices[2] + " The computer won!"
   }
   if(a == choices[1] && b == choices[0]){
    return "User selected: " + choices[1] + " Computer selected: " + choices[0] + " The computer won!"
   }
   if(a == choices[2] && b == choices[1]){
    return "User selected: " + choices[2] + " Computer selected: " + choices[1] + "The computer won!"
   }
}
userMakeChoice();


