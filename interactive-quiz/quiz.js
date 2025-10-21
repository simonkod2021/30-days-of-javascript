//Quiz questions, stored as objects in the questions array
const questions = [
    {   id: 1,
        question: "I vilket landskap hittar du vattenfallet Njupeskär?",
        answers: ["Dalarna","Hälsingland", "Jämtland", "Härjedalen", "Värmland"],
        correct: "Dalarna"
    },
    {   id: 2,
        question: "Vad heter huvudstaden i Australien?",
        answers: ["Perth","Melbourne", "Canberra", "Sydney", "Brisbane"],
        correct: "Canberra"
    },
    {   id: 3,
        question: "Vilket är det minsta landet i världen?",
        answers: ["Luxembourg","Vatikanstaten", "Liechtenstein", "Monaco", "San Marino"],
        correct: "Vatikanstaten"
    },
    {   id: 4,
        question: "Vilken är Sveriges längsta flod?",
        answers: ["Dalälven","Kalixälven", "Göta älv", "Torneälven", "Luleälven"],
        correct: "Göta älv"
    },
    {   id: 5,
        question: "Vilka länder gränsar Panama till?",
        answers: ["Costa Rica och Nicaragua","Mexiko och Costa Rica", "Costa Rica och Colombia", "Colombia och Honduras", "Ecuador och Guatemala"],
        correct: "Costa Rica och Colombia"
    },
    {   id: 6,
        question: "Vilken är huvudstaden i Vietnam?",
        answers: ["Hanoi","Ho Chi Minh", "Hoi An", "Hainan", "Haiphong"],
        correct: "Hanoi"
    },
    {   id: 7,
        question: "Vilket land har den längsta kustlinjen?",
        answers: ["Kanada", "USA", "Ryssland", "Japan", "Australien"],
        correct: "Kanada"
    },
    {   id: 8,
        question: "Vilka länder gränsar Luxemburg till?",
        answers: ["Belgien, Tyskland och Frankrike","Tyskland, Frankrike och Spanien", "Tyskland, Nederländerna och Frankrike", "Tyskland, Belgien och Schweiz","Tyskland, Frankrike och Österrike"],
        correct: "Belgien, Tyskland och Frankrike"
    },
    {   id: 9,
        question: "I vilken amerikansk stad hittar man den berömda Lombard Street?",
        answers: ["San Francisco","Los Angeles", "New York", "San Jose", "Washington"],
        correct: "San Francisco"
    },
    {   id: 10,
        question: "Vilken är USA:s största delstat?",
        answers: ["Washington","Texas", "Alaska","Nevada", "California"],
        correct: "Alaska"
    }
]

// Get elements from the DOM
const answer = document.querySelectorAll(".answers-btn");
const questionTitle = document.getElementById("questionsh2");
const questionLabel = document.getElementById("question-label");
const questionNumber = document.getElementById("question-number");
const next = document.getElementById("submitBtn");
const check = document.getElementById("checkAnswer");


// Tracks which question the quiz is currently at
let i = 0;

// Tracks how many questions were answered correctly
let correct = 0;

// This functions sets the text and color of the DOM elements
function setQuestion(){
    check.innerText = "";
    answer.forEach(button => {
    button.style.backgroundColor = 'rgba(0, 70, 145, 0.6)';
    button.disabled = false;
});
    answer.forEach((button, index) => {button.innerText = questions[i].answers[index]})
    questionNumber.innerText = "Fråga " + questions[i].id + " av 10"
    questionTitle.innerText = questions[i].question
}


// What happens when we click the button for next question
// Also checks if have finished the quiz 
function handleNextClick(){
        i++
        if(i < questions.length){
            setQuestion();
        }else{
            next.disabled = true;
            next.innerText = "Slut på quiz!"
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
                button.style.backgroundColor = 'green'
                check.innerText = "Rätt svar!"
            }else{
                button.style.backgroundColor = 'red'
                check.innerText = "Fel svar!"
            }
        })
    })
}


// Initialize the states
next.addEventListener("click", handleNextClick);
checkAnswer();
setQuestion();