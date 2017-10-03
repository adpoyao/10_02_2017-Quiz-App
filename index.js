'use strict';
/* global $ */

const questions = [
  { question: 'What is the capital of California?',
    answer: ['Los Angeles', 'Sacramento', 'San Francisco', 'Anaheim'],
    answerKey: 1,
    answered: false,
    correct: null},
  { question:'Where is Mt. Rushmore located?',
    answer:['Washington D.C', 'Virginia', 'Montana', 'South Dakota'],
    answerKey: 3,
    answered: false,
    correct: null},
  { question: 'What is the biggest state in the United States?',
    answer: ['Delaware', 'Texas', 'California', 'Alaska'],
    answerKey: 3,
    answered: false,
    correct: null},
  { question: 'Which countries are below the equator?',
    answer: ['Costa Rica', 'Ethiopia', 'Peru', 'Iraq'],
    answerKey: 2,
    answered: false,
    correct: null},
  { question:'Which one is NOT a continent?',
    answer: ['North America', 'Austraulia', 'Russia', 'Africa'],
    answerKey: 2,
    answered: false,
    correct: null}
];

const defaultStore = {
  questions,
  view: 'intro',
  currentQuestion: 0,
  correctAnswerCount: 0,
}; 

let STORE = Object.assign({}, defaultStore);

//Rendering
function renderPage(){
  let elementHTML = generateQuestionElement(STORE);
  $('.js-page-content').html(elementHTML);
  console.log('`renderPage` ran');
}

function generateQuestionElement(store){
  let {currentQuestion} = STORE; 
  if(store.view === 'intro') {
    return (
      `<div class= 'intro-view js-intro-view'>
       <h2>Let's take a Geography quiz!</h2>
       <p>Instructions: Please select an answer for each question.</p>
       <p>Have fun!</p>
       <button type="button" class="start-button js-start-button">
       <span>Start Quiz!</span>
       </button>
     </div>
     `);
  }

  else if(store.view === 'question') {
    return (
      `<div class="question-view js-question-view">
    <form action="#" id="js-quiz-form">
    <div class="question-counter">Question #${store.currentQuestion +1}</div>
    <p class="question js-question">${store.questions[currentQuestion].question}</p>
    <input type="radio" name="answer" id="answer-1" value="0"><label for="answer-1">${store.questions[currentQuestion].answer[0]}</label>
    <br>
    <input type="radio" name="answer" id="answer-2" value="1"><label for="answer-2">${store.questions[currentQuestion].answer[1]}</label>
    <br>
    <input type="radio" name="answer" id="answer-3" value="2"><label for="answer-3">${store.questions[currentQuestion].answer[2]}</label>
    <br>
    <input type="radio" name="answer" id="answer-4" value="3"><label for="answer-4">${store.questions[currentQuestion].answer[3]}</label>
    <br>
    <button type="submit" class="submit-answer js-submit-answer"><span>Submit</span></button>
    </form>
    </div>`);
  }

  else if(store.view === 'outro') {
    return (
      `<div class= 'outro-view js-outro-view'>
    <p>Congrats! You finished the quiz!</p>
    <p>You scored ${store.correctAnswerCount} out of 5</p>
    <p>Would you like to retake this quiz?</p>
    <button type="button" class="replay-button js-replay-button">Yes I Would!</button> 
    </div>`);
  }
}


//INTRO VIEW

function startQuiz(){
  //Listen to user click on "START"
  //Change STORE.View to: 'question'
  //Render Page;
  $('.js-page-content').on('click', '.js-start-button', event => {
    console.log('`startQuiz` ran');
    STORE.view = 'question';
    renderPage();
  });
}

//QUESTION VIEW
//Functions goes: handleAnswerSubmit calls -> processSubmitData calls ->  processAnswer

function handleAnswerSubmit(){
  let {currentQuestion} = STORE;
  //Listen for Answer to "submit" button
  $('.js-page-content').on('submit','#js-quiz-form', event => {
    event.preventDefault();
    console.log('`handleAnswerSubmit` ran');
    processSubmitData();
  });
}

function handleNextQuestionButton() {
  $('.js-page-content').on('click','.js-next-question', event => {
    $('.js-output').html('');    
    renderPage();
  });
}

function processSubmitData(){
  let {currentQuestion} = STORE;
  //Condition: (1) If answer, activate "next"
  //Increase count to STORE.currentQuestion
  //See if answer is correct
  if ($('input[type=radio]:checked').length > 0) {
    console.log('checked radio button detected');
    STORE.questions[currentQuestion].answered = true;
    processAnswer();
    $('button[type=submit]').hide();
    $('#js-quiz-form').append('<button type="button" class="next-question js-next-question"><span>Next</span></button>');
  }
  //Condition: (2) If blank, then don't activate 
  if (!$('input[type=radio]:checked').length > 0) {
    console.log('blank answer detected');
    $('.js-output').html('<p>You need to select an answer!</p>');
  }
  //if all questions are answered: change view to: 'outro'
  if(STORE.currentQuestion < STORE.questions.length) {
    STORE.currentQuestion ++;
  } 
  if(STORE.currentQuestion === 5) {
    STORE.view = 'outro';
  }
}

function processAnswer(){
  let {currentQuestion} = STORE;
  let answerKeyValue = STORE.questions[currentQuestion].answerKey;  
  let radioValue = $('input[type=radio]:checked').val();
  radioValue = parseInt(radioValue, 10);
  
  //Condition CORRECT:
  //update STORE.questions[currentQuestion].correct
  //update total correct question count
  //alert Feedback & total points
  if (answerKeyValue === radioValue){
    console.log('correct answer is detected');
    STORE.questions[currentQuestion].correct = true;
    STORE.correctAnswerCount ++;
    let points;
    if(STORE.correctAnswerCount <= 1){
      points = 'point';
    } if(STORE.correctAnswerCount >1){
      points = 'points';
    }
    $('.js-output').html(`<p>CORRECT! You have ${STORE.correctAnswerCount} ${points}!</p>`);
    // alert(`CORRECT! You have ${STORE.correctAnswerCount} ${points}!`);
  }

  //Condiction INCORRECT:
  if (answerKeyValue !== radioValue) {
    const correctAnswer = STORE.questions[currentQuestion].answer[answerKeyValue];
    STORE.questions[currentQuestion].correct = false;
    $('.js-output').html(`<p>Sorry, wrong answer. The correct answer is ${correctAnswer}</p>`);
    //alert(`Sorry, wrong answer. The correct answer is ${correctAnswer}`);
  }
}

//OUTRO VIEW

function handlePlayAgainButton() {
  //Listen for user click on replay button  
  $('.js-page-content').on('click','.js-replay-button', event => {
    resetStoreValue();
    renderPage();
  });
}

function resetStoreValue() {
  //Reset STORE
  STORE = Object.assign({}, defaultStore);
}

function callBackFunctions(){
  renderPage();
  startQuiz();
  handleAnswerSubmit();
  handleNextQuestionButton();
  handlePlayAgainButton();
}

$(callBackFunctions);