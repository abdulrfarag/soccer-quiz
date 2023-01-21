let questionText = document.querySelector(".question-text");
let option = document.querySelectorAll(".option");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector(".choices");
var answerEl = document.querySelector("#answer");
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

  for (choice in currentQuestion.choices) {
    var choicebtn = document.createElement("button");
    choicebtn.textContent = currentQuestion.choices[choice];
    choicebtn.dataset.letter = choice;
    choicebtn.addEventListener("click", evaluation);

    answerEl.appendChild(choicebtn);
    console.log(currentQuestion.choices[choice]);
  }
}

function evaluation(e) {

  var isCorrect = (e.target.dataset.letter=== questions[currentQuestionIndex].answer);
  if (!isCorrect) {
    time -= 10;
    timerEl.textContent = time;
  }
}

// start quiz function with all the actions needed

function renderchoices(currentQuestion) {
  // loop over choices
  currentQuestion.choices.forEach(function (choice, i) {
    // create new button for each choice
    var choicebtn = document.createElement("button");
    choicebtn.setAttribute("class", "choice");
    choicebtn.setAttribute("value", choice);

    choicebtn.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    // choicebtn.onclick = questionClick;

    // display on the page
    document.querySelector(".choices").appendChild(choicebtn);
  });
  // for (var i=0; i<option.length; i++) {
  //      option[i].textContent=questions[currentQuestionIndex].choices[i];
  //    }
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  // if (time <= 0) {
  //   quizEnd();
  // }
}
