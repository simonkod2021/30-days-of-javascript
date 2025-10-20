
const questions = [
    {   id: 1,
        question: "I vilket landskap hittar du vattenfallet Njupeskär?",
        answers: ["Dalarna","Hälsingland", "Jämtland"],
        correct: "Dalarna"
    },
    {   id: 2,
        question: "Vad heter huvudstaden i Australien?",
        answers: ["Perth","Melbourne", "Canberra"],
        correct: "Canberra"
    },
    {   id: 3,
        question: "Vilket är det minsta landet i världen?",
        answers: ["Luxembourg","Vatikanstaten", "Liechtenstein"],
        correct: "Vatikanstaten"
    },
    {   id: 4,
        question: "Vilken är Sveriges längsta flod?",
        answers: ["Dalälven","Kalixälven", "Göta älv"],
        correct: "Göta älv"
    },
    {   id: 5,
        question: "Vilka länder gränsar Panama till?",
        answers: ["Costa Rica och Nicaragua","Mexiko och Costa Rica", "Costa Rica och Colombia"],
        correct: "Costa Rica och Colombia"
    },
    {   id: 6,
        question: "Vilken är huvudstaden i Vietnam?",
        answers: ["Hanoi","Ho Chi Minh", "Hoi An"],
        correct: "Hanoi"
    },
    {   id: 7,
        question: "Vilket land har den längsta kustlinjen?",
        answers: ["Kanada","USA", "Ryssland"],
        correct: "Kanada"
    },
    {   id: 8,
        question: "Vilka länder gränsar Luxemburg till?",
        answers: ["Belgien, Tyskland och Frankrike","Tyskland, Frankrike och Spanien", "Tyskland, Nederländerna och Frankrike"],
        correct: "Belgien, Tyskland och Frankrike"
    },
    {   id: 9,
        question: "I vilken amerikansk stad hittar man den berömda Lombard Street?",
        answers: ["San Francisco","Los Angeles", "New York"],
        correct: "San Francisco"
    },
    {   id: 10,
        question: "Vilken är USA:s största delstat?",
        answers: ["Washington","Texas", "Alaska"],
        correct: "Alaska"
    }
]

// Get elements from the DOM
const answer = document.querySelectorAll(".answers-btn");
const questionTitle = document.getElementById("questionsh2");
const questionLabel = document.getElementById("question-label");
const questionNumber = document.getElementById("question-number");
const next = document.getElementById("submitBtn");

let i = 0;
function setQuestion(){
    answer.forEach((button, index) => {button.innerText = questions[i].answers[index]})
    questionNumber.innerText = "Fråga " + questions[i].id + " av 10"
    questionTitle.innerText = questions[i].question
}

function handleNextClick(){
        i++
        console.log(i)
        if(i < questions.length){
            setQuestion();
        }else{
            window.alert("Quiz over")
            next.disabled = true;
            next.innerText = "Slut";
            next.removeEventListener("click", handleNextClick);
            }
        }

next.addEventListener("click", handleNextClick);

setQuestion();