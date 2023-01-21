let questionText= document.querySelector('.question-text');
let option= document.querySelectorAll('.option');
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector('.choices');
var answerEl = document.querySelector('#answer');

let questions= [
    {
        question:'Which country won the World Cup in 1998?', 
        choices: {a: "Germany", b: 'Italy', c: 'France', d: 'Argentina'},
        answer: 'c'
    },
    {
        question:'Which country won the World Cup in 2002?', 
        choices: {a: "Brazil", b: 'Italy', c: 'France', d: 'Argentina'},
        answer: 'a'
    },
    {
        question:'Which country won the World Cup in 2006?', 
        choices: {a: "Brazil", b: 'Italy', c: 'France', d: 'Argentina'},
        answer: 'b'
    },
];
let currentQuestionIndex= 0;
var time = questions.length * 15;
var timerId;




for (var i=0; i<option.length; i++) {
 option[i].addEventListener('click', getQuestion);   
}

let startQuiz= document.querySelector('#start-quiz');
startQuiz.addEventListener('click', function(){
    document.querySelector("#startView").setAttribute("class", "hide");
    choicesEl.classList.remove('hide')
    answerEl.classList.remove('hide')
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    getQuestion();
});

function getQuestion(event){
    var currentQuestion = questions[currentQuestionIndex];
  // console.log(event.target.textContent)

    questionText.textContent=currentQuestion.question;

    renderchoices(currentQuestion);

//   else if (currentQuestionIndex== questions.length){
//     return
//   }
//   else if (event.target.textContent=== questions[currentQuestionIndex].answer) {
//     currentQuestionIndex++
//     alert('correct')
//     questionText.textContent=questions[currentQuestionIndex].question;
//     renderchoices()
    
//   }
//   else {
//     currentQuestionIndex++
//     alert('incorrect')
//     questionText.textContent=questions[currentQuestionIndex].question;
//     renderchoices()
    
//   }
   
}

// start quiz function with all the actions needed


function renderchoices(currentQuestion){
     // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
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