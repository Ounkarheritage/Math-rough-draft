const equationElement = document.getElementById('equation');
const answerElement = document.getElementById('answer');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');

let score = 0;
let currentEquation;

function generateEquation() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 20) - 10;
    const x = Math.floor(Math.random() * 10) + 1;

    currentEquation = { a, b, x };
    equationElement.textContent = `${a}x + ${b} = ${a * x + b}`;
}

function checkAnswer() {
    const userAnswer = parseInt(answerElement.value);
    if (userAnswer === currentEquation.x) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = `Wrong! The correct answer was ${currentEquation.x}.`;
        feedbackElement.style.color = "red";
    }
    updateScore();
    answerElement.value = "";
    generateEquation();
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

submitButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', () => {
    score = 0;
    updateScore();
    generateEquation();
    feedbackElement.textContent = "";
});

window.onload = () => {
    generateEquation();
    updateScore();
};