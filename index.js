'use strict';
/* global $ */

const questions = [
  { question: 'What is the capital of California?',
    answer: ['Los Angeles', 'Sacramento', 'San Francisco', 'Anaheim'],
    answerKey: 1, //a
    answered: false,
    correct: null},
  { question:'Where is Mt. Rushmore located?',
    answer:['Washington D.C', 'Virginia', 'Montana', 'South Dakota'],
    answerKey: 3, //d}
    answered: false,
    correct: null},
  { question: 'What is the biggest state in the United States?',
    answer: ['Delaware', 'Texas', 'California', 'Alaska'],
    answerKey: 3, //d
    answered: false,
    correct: null},
  { question: 'Which countries are below the equator?',
    answer: ['Costa Rica', 'Ethiopia', 'Peru', 'Iraq'],
    answerKey: 2, //c
    answered: false,
    correct: null},
  { question:'Which one is NOT a continent?',
    answer: ['North America', 'Austraulia', 'Russia', 'Africa'],
    answerKey: 2, //c
    answered: false,
    correct: null}
];

const STORE = {
  questions,
  view: 'intro',
  currentQuestion: 0,
  correctAnswerCount: 0,
  //Could use get syntax for report of # of correct answers
  get lastAnswerCorrect () {
    return this.prompt[this.currentQuestion].correct === true;
  }
}; 

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
    <button type="button" class="next-question js-next-question"><span>Next Question</span></button>
    <div class="output js-output"></div>
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
  }
  //Condition: (2) If blank, then don't activate 
  if (!$('input[type=radio]:checked').length > 0) {
    console.log('blank answer detected');
    $('.js-output').html('You need to select an answer!');
  }
}

function processAnswer(){
//Condition CORRECT:
  //update STORE.questions[currentQuestion].correct
  //update total correct question count
  //display YAY!

//Condiction INCORRECT:
  //update STORE.questions[currentQuestion].correct
  //display BOO + correct answer

//Output result, 
}


function handleNextQuestionButton(){
  //Listen for user to click "next" button
  $('js-page-content').on('click', '.js-next-question', event => {
    console.log('`js-page-content` ran');
    //Condition: Question at index of CurrentQ must have 'answered = true'
    renderPage();
  });
  //nextQuestion();
}

function nextQuestion(){ 
  //condition: if questions aren't all answered:
  ////output: Need to finish this question first
  //condition: if questions are all answered:
  //STORE.currentQuestion ++;
  //if all questions are answered: change view to: 'outro'
  
}

//OUTRO VIEW

function handlePlayAgainButton() {
  //Listen for user click on replay button  
  $('.js-page-content').on('click','.js-replay-button', event => {
    //Reset STORE
    //Change view to 'intro'
    resetStoreValue();
    renderPage();
  });
}

function resetStoreValue() {
  STORE.view = 'intro';
  //insert function here
}

function callBackFunctions(){
  renderPage();
  startQuiz();
  handleAnswerSubmit();
  handlePlayAgainButton();
}

$(callBackFunctions);