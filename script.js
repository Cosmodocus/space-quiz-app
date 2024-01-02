const questions = [
    {
        question:"What is the Sun Classified As?",
        answers:[
            {text: "Moon", correct:false },
            {text: "Planet", correct:false },
            {text: "Galaxy", correct:false },
            {text: "Star", correct:true },
        ]
    },
    {
        question:"What is The Largest Planet in the Solar System?",
        answers:[
            {text: "Venus", correct:false },
            {text: "Jupiter", correct:true},
            {text: "Saturn", correct:false },
            {text: "Neptune", correct:false },
        ]
    },
    {
        question:"What Planet is closest to our Sun?",
        answers:[
            {text: "Mercury", correct:true },
            {text: "Earth", correct:false },
            {text: "Venus", correct:false },
            {text: "Uranus", correct:false },
        ]
    },
    {
        question:"Where are humans from?",
        answers:[
            {text: "Moon", correct:false },
            {text: "Sun", correct:false },
            {text: "Earth", correct:true },
            {text: "Mars", correct:false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextQuestion();
    }else{
        startQuiz();
    }
})

function handleNextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.style.display = "block";
    nextButton.innerHTML = "Play Again";
}

startQuiz();