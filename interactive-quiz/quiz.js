//Quiz questions, stored as objects in the questions array
const questions = [
    {   id: 1,
        question: "I vilket landskap hittar du vattenfallet Njupeskär?",
        answers: ["Dalarna","Hälsingland", "Jämtland", "Härjedalen", "Värmland"],
        description: "Njupeskär är ett vattenfall i nordvästra Dalarna, som bildats av Njupån. Här finns ett av Sveriges högsta vattenfall. Njupeskär har en fallhöjd på 93 meter, varav 70 meter fritt fall.",
        correct: "Dalarna"
    },
    {   id: 2,
        question: "Vad heter huvudstaden i Australien?",
        answers: ["Perth","Melbourne", "Canberra", "Sydney", "Brisbane"],
        description: "Canberra är Australiens huvudstad. Den är belägen på federalt territorium, Australian Capital Territory. Staden har drygt 473 000 invånare och är Australiens åttonde största stad samt den största stad som inte ligger vid kusten.",
        correct: "Canberra"
    },
    {   id: 3,
        question: "Vilket är det minsta landet i världen?",
        answers: ["Luxembourg","Vatikanstaten", "Liechtenstein", "Monaco", "San Marino"],
        description: "Vatikanstaten är omsluten av Italiens huvudstad Rom och är världens minsta självständiga stat.",
        correct: "Vatikanstaten"
    },
    {   id: 4,
        question: "Vilken är Sveriges längsta flod?",
        answers: ["Dalälven","Kalixälven", "Göta älv", "Torneälven", "Luleälven"],
        description: "Göta älv är en stor flod i sydvästra Sverige, som avvattnar Vänern och mynnar ut i Kattegatt i Göteborg på svenska västkusten.",
        correct: "Göta älv"
    },
    {   id: 5,
        question: "Vilka länder gränsar Panama till?",
        answers: ["Costa Rica och Nicaragua","Mexiko och Costa Rica", "Costa Rica och Colombia", "Colombia och Honduras", "Ecuador och Guatemala"],
        description: "Panama är ett land i centralamerika som gränsar till Colombia i sydöst och Costa Rica i norr.",
        correct: "Costa Rica och Colombia"
    },
    {   id: 6,
        question: "Vilken är huvudstaden i Vietnam?",
        answers: ["Hanoi","Ho Chi Minh", "Hoi An", "Hainan", "Haiphong"],
        description: "Hanoi är huvudstaden i Vietnam, Hanoi är en av fem kommuner i Vietnam, och är landets näst största stad efter Ho Chi Minh.",
        correct: "Hanoi"
    },
    {   id: 7,
        question: "Vilket land har den längsta kustlinjen?",
        answers: ["Kanada", "USA", "Ryssland", "Japan", "Australien"],
        description: "Kanada har längst kustlinje som sträcker sig från Halvön Adak i väst till Bonavista i öst.",
        correct: "Kanada"
    },
    {   id: 8,
        question: "Vilka länder gränsar Luxemburg till?",
        answers: ["Belgien, Tyskland och Frankrike","Tyskland, Frankrike och Spanien", "Tyskland, Nederländerna och Frankrike", "Tyskland, Belgien och Schweiz","Tyskland, Frankrike och Österrike"],
        description: "Luxemburg är ett litet land som ligger imellan Frankrike i väst, Belgien i norr och Tyskland i öst.",
        correct: "Belgien, Tyskland och Frankrike"
    },
    {   id: 9,
        question: "I vilken amerikansk stad hittar man den berömda Lombard Street?",
        answers: ["San Francisco","Los Angeles", "New York", "San Jose", "Washington"],
        description: "Lombard Street är namnet på en populär gata i San Francisco.",
        correct: "San Francisco"
    },
    {   id: 10,
        question: "Vilken är USA:s största delstat?",
        answers: ["Washington","Texas", "Alaska","Nevada", "California"],
        description: "Alaska är en icke-kontinental amerikansk delstat och den största till ytan i USA. Den är en amerikansk exklav, belägen i den nordvästra änden av den nordamerikanska kontinenten.",
        correct: "Alaska"
    }
]

// Get elements from the DOM
const questionDescription = document.querySelector(".description");
const answer = document.querySelectorAll(".answers-btn");

const questionTitle = document.getElementById("questionsh2");
const questionLabel = document.getElementById("question-label");
const questionNumber = document.getElementById("question-number");
const next = document.getElementById("submitBtn");
const check = document.getElementById("checkAnswer");
const scoreDisplay = document.getElementById("scoreCounter");


// Tracks which question the quiz is currently at
let i = 0;

// Tracks how many questions were answered correctly
let correct = 0;

// This functions sets the text and color of the DOM elements
function setQuestion(){
    check.innerText = "";
    answer.forEach(button => {
    button.style.backgroundColor = 'rgba(172, 172, 172, 1)';
    button.disabled = false;
    questionDescription.textContent = "";
    button.classList.remove("correct-anim", "wrong-anim");
});
    answer.forEach((button, index) => {button.innerText = questions[i].answers[index]})
    questionNumber.innerText = "Fråga " + questions[i].id + " av 10"
    scoreDisplay.innerText = `Antal rätt: ${correct}`
    questionTitle.innerText = questions[i].question
}


// What happens when we click the button for next question and checks if have finished the quiz
function handleNextClick(){
        i++
        if(i < questions.length){
            setQuestion();
        }else{
            next.disabled = true;
            next.innerText = "Slut på quiz!"
            scoreDisplay.innerText = "";
            check.innerText = "Du fick " + correct + " Poäng!"
            next.removeEventListener("click", handleNextClick);
            }
        }

// Checks if the user clicked on the correct answer
// If the answer was correct = green button, otherwise red
// Also displays in text if it was correct or not
function checkAnswer(){
    answer.forEach(button => {
        button.addEventListener("click", function(){
            answer.forEach(btn => btn.disabled = true);
            if(button.innerText === questions[i].correct){
                correct ++
                button.style.backgroundColor = 'rgba(163, 255, 77, 0.5)';
                button.classList.add("correct-anim");
                check.innerText = `Du svarade ${button.innerText} som var korrekt!`
                questionDescription.textContent = questions[i].description;
            }else{
                button.style.backgroundColor = 'rgba(255, 34, 34, 0.5)';
                button.classList.add("wrong-anim");
                check.innerText = `Du svarade ${button.innerText} som var fel!`
                answer.forEach(btn => {
                    if(btn.innerText === questions[i].correct) {
                        btn.style.backgroundColor = 'rgba(163, 255, 77, 0.5)';
                        btn.classList.add("correct-anim");
                        questionDescription.textContent = questions[i].description;
                    }
                })
            }
        })
    })
}


// Initialize the states
next.addEventListener("click", handleNextClick);
checkAnswer();
setQuestion();