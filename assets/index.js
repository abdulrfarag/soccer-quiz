// 
let questionText = document.querySelector(".question-text");
let option = document.querySelectorAll(".option");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector(".choices");
var answerEl = document.querySelector("#answer");
var endGameEl = document.querySelector("#end-game");
var scoreEl = document.querySelector(".score");
var initialsFormEl = document.querySelector(".initials-form");
var submittedEl = document.querySelector("#submitted");
var scoreTableEl = document.querySelector("#score-table");

var restartGameEl = document.querySelector(".restart-game");
let currentQuestionIndex = 0;

let questions = [
  {
    question: "Which country won the World Cup in 1998?",
    choices: { a: "Germany", b: "Italy", c: "France", d: "Argentina" },
    answer: "c",
  },
  {
    question: "Which country won the World Cup in 2002?",
    choices: { a: "Brazil", b: "Italy", c: "France", d: "Argentina" },
    answer: "a",
  },
  {
    question: "Which country won the World Cup in 2006?",
    choices: { a: "Brazil", b: "Italy", c: "France", d: "Argentina" },
    answer: "b",
  },
];

var time = questions.length * 15;
var timerId;

for (var i = 0; i < option.length; i++) {
  option[i].addEventListener("click", getQuestion);
}

let startQuiz = document.querySelector("#start-quiz");
startQuiz.addEventListener("click", function () {
  document.querySelector("#startView").setAttribute("class", "hide");
  choicesEl.classList.remove("hide");
  answerEl.classList.remove("hide");
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestion();
});

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  // console.log(event.target.textContent)

  questionText.textContent = currentQuestion.question;

  //loop throught the four answers, for each one create a button and append it to answerEl
  answerEl.innerHTML = "";
  for (choice in currentQuestion.choices) {
    var choicebtn = document.createElement("button");
    choicebtn.textContent = currentQuestion.choices[choice];
    choicebtn.dataset.letter = choice;
    choicebtn.addEventListener("click", evaluation);

    answerEl.appendChild(choicebtn);
  }
}

function evaluation(e) {
  var isCorrect =
    e.target.dataset.letter === questions[currentQuestionIndex].answer;
  if (!isCorrect) {
    time -= 25;
    if (time <= 0) endGame();
    timerEl.textContent = time;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    getQuestion();
  } else endGame();
}

function clockTick() {
  // update time
  time--;
  if (time <= 0) endGame();
  timerEl.textContent = time;

  // check if user ran out of time
  // if (time <= 0) {
  //   quizEnd();
  // }
}

function endGame() {
  console.log("the game is over");
  clearInterval(timerId);
  choicesEl.classList.add("hide");
  answerEl.classList.add("hide");
  endGameEl.classList.remove("hide");
  scoreEl.textContent = `your final score is ${time >= 0 ? time : 0}`;
}

function submitScore(e) {
  e.preventDefault();

  console.log(time >= 0 ? time : 0);
  console.log(submittedEl.value);

  if (localStorage.getItem("scoreArray")) {
    const arrayFromStorage = JSON.parse(localStorage.getItem("scoreArray"));
    arrayFromStorage.push({
      initials: submittedEl.value,
      score: time >= 0 ? time : 0,
    });
    localStorage.setItem("scoreArray", JSON.stringify(arrayFromStorage));
  } else {
    localStorage.setItem(
      "scoreArray",
      JSON.stringify([
        { initials: submittedEl.value, score: time >= 0 ? time : 0 },
      ])
    );
  }
  location.replace("hs.html");
}
// restart game button
restartGameEl.addEventListener("click", function () {
  location.reload();
});

// initials from action
initialsFormEl.addEventListener("submit", submitScore);

// view high score table
let viewHighScore = document.querySelector(".view-high-score");

viewHighScore.addEventListener("click", () => {
  location.replace("hs.html");
});
