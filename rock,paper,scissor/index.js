const choices = ["Sten", "Sax","Påse"];

const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');

function computerMakeChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    const choice = choices[computerChoice];
}


function userMakeChoice(){
    const rockChoice = rock.addEventListener("click", function(){
        const choice = choices[0]
    })
    const scissorChoice = scissor.addEventListener("click", function(){
        const choice = choices[1]
    })
    const paperChoice = paper.addEventListener("click", function(){
        const choice = choices[2]
    })
}
userMakeChoice();
computerMakeChoice();

