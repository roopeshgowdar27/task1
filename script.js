const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
     {
        question: "Which branch is best in Dr.AIT?",
        choices: ["CS", "IS", "EC", "EE"],
        correctAnswer: "IS"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
      question:"who is the toughest man on earth?",
      choices:["david_goggins","joe_biden","donald_trump","nobody"],
      correctAnswer:"david_goggins"
    },
    
          ];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score-value");

function displayQuestion() {
    questionElement.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    choicesElement.innerHTML = '';
    for (const choice of questions[currentQuestion].choices) {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="answer" value="${choice}">${choice}`;
        choicesElement.appendChild(li);
    }
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="answer"]:checked');
    if (selectedChoice) {
        const userAnswer = selectedChoice.value;
        if (userAnswer === questions[currentQuestion].correctAnswer) {
            score++;
            feedbackElement.textContent = "Correct!";
        } else {
            feedbackElement.textContent = `Incorrect. The correct answer is ${questions[currentQuestion].correctAnswer}.`;
        }
        scoreElement.textContent = score;
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            feedbackElement.textContent = "Quiz complete! Your final score is " + score;
            choicesElement.innerHTML = '';
        }
    }
}

displayQuestion();

document.getElementById("submit-button").addEventListener("click", checkAnswer);
