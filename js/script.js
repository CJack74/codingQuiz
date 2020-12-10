  
// Variables for quiz
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// Variables for elements
var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#startButton");
var submitBtn = document.querySelector("#submit-button");
var titleScreen = document.querySelector("#title-section");
var quizScreen = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#highscore-section");
var highScoreDisplay = document.querySelector("#highscore-display-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");

// Function to start game
function startQuiz() {
    // Start timer
    timerId = setInterval(tick, 1000)

    // Shows starting time
    timeEl.textContent = time;

    getQuestion();
}

// Function for seconds off the clock
function tick() {
    // Updates time
    time--;
    timeEl.textContent = time;

    // Check to see if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
} 