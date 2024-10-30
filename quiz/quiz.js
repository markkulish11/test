const quizData = [
    {
        question: "What's the capital of Ukraine?",
        options: ["Belgrade", "Sofia", "Minsk", "Kyiv"],
        answer: "Kyiv"
    },
    {
        question: "What's the smallest planet in our solar system?",
        options: ["Mercury", "Pluto", "Mars", "Earth"],
        answer: "Mercury"
    },
    {
        question: "What's the approximate value of pi?",
        options: ["3.14", "4", "3", "3.2"],
        answer: "3.14"
    },
    {
        question: "What's the most spoken language in the world",
        options: ["English", "Chinese", "Spanish", "Arabic"],
        answer: "English"
    },
    {
        question: "What's the formula for ammonia",
        options: ["H20", "CH4", "NH3", "SO2"],
        answer: "NH3"
    },
    {
        question: "12^2 =",
        options: ["14", "3.5", "24", "144"],
        answer: "144"
    },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;
function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your Score: ${score}/${quizData.length}</p>
    `;
}

showQuestion();