const questions = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Neptune", correct: false },
            { text: "Uranus", correct: false },
        ]
    },
    {
        question: "What is the name of the largest moon of Saturn?",
        answers: [
            { text: "Europa", correct: false },
            { text: "Titan", correct: true },
            { text: "Ganymede", correct: false },
            { text: "Callisto", correct: false },
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Mercury", correct: true },
        ]
    },
    {
        question: "What is the name of the farthest planet in our solar system?",
        answers: [
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: true },
            { text: "Pluto", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "Which planet has the Great Red Spot, a giant storm?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "What is the name of the largest volcano in the solar system, located on Mars?",
        answers: [
            { text: "Mount St. Helens", correct: false },
            { text: "Mount Everest", correct: false },
            { text: "Olympus Mons", correct: true },
            { text: "Mauna Kea", correct: false },
        ]
    },
    {
        question: "Which planet is known for its beautiful rings?",
        answers: [
            { text: "Saturn", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false },
        ]
    },
    {
        question: "What is the name of the first human-made satellite launched into space?",
        answers: [
            { text: "Voyager 1", correct: false },
            { text: "Hubble Space Telescope", correct: false },
            { text: "Sputnik 1", correct: true },
            { text: "Apollo 11", correct: false },
        ]
    },
    {
        question: "Which planet is often referred to as the 'Morning Star' or 'Evening Star'?",
        answers: [
            { text: "Venus", correct: true },
            { text: "Mercury", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
        ]
    }
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
