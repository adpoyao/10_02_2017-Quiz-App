'use strict';
/* global $ */

const q1 = {
  question: 'What is the capital of California?',
  answer: ['Los Angeles', 'Sacramento', 'San Francisco', 'Anaheim'],
  answerKey: 1 //a
};
const q2 = {
  question:'Where is Mt. Rushmore located?',
  answer:['Washington D.C', 'Virginia', 'Montana', 'South Dakota'],
  answerKey: 3 //d
};
const q3 = {
  question: 'What is the biggest state in the United States?',
  answer: ['Delaware', 'Texas', 'California', 'Alaska'],
  answerKey: 3 //d
};
const q4 = {
  question: 'Which countries are below the equator?',
  answer: ['Costa Rica', 'Ethiopia', 'Peru', 'Iraq'],
  answerKey: 2 //c
};
const q5 = {
  question:'Which one is NOT a continent?',
  answer: ['North America', 'Austraulia', 'Russia', 'Africa'],
  answerKey: 2 //c
};

const STORE = {
  prompt: [
    {questionBlock: q1, answered: false, correct: null}, 
    {questionBlock: q2, answered: false, correct: null}, 
    {questionBlock: q3, answered: false, correct: null}, 
    {questionBlock: q4, answered: false, correct: null}, 
    {questionBlock: q5, answered: false, correct: null}
  ],
  view: 'intro',
  correctAnswerCount: 0
}; 

//Rendering
function renderPage(){
  let elementHTML = generateQuestionElement(STORE);
  $('.js-page-content').html(elementHTML);
  console.log('`renderPage` ran');
}

console.log(renderPage());

function generateQuestionElement(store){
  if(store.view === 'intro') {
    return (
      `<div class= 'intro-view js-intro-view'>
       <h2>Let's take a Geography quiz!</h2>
       <p>Instructions: Please select an answer for each question.</p>
       <p>Have fun!</p>
       <button type="button">
       <span>Start Quiz!</span>
       </button>
     </div>
     `);
  }


//TO DO: Figure out index loop  
  else if(store.view === 'question') {
    return (
      `<div class = 'question-view js-question-view'>
    <form id="js-quiz-form">
    <p class="question js-question">${store.prompt[0].questionBlock.question}</p>
    <input type="radio" name="answer" id="answer-1" value="0"><label for="answer-1">${store.prompt[0].questionBlock.answer[0]}</label>
    <br>
    <input type="radio" name="answer" id="answer-2" value="1"><label for="answer-2">${store.prompt[0].questionBlock.answer[1]}</label>
    <br>
    <input type="radio" name="answer" id="answer-3" value="2"><label for="answer-3">${store.prompt[0].questionBlock.answer[2]}</label>
    <br>
    <input type="radio" name="answer" id="answer-4" value="3"><label for="answer-4">${store.prompt[0].questionBlock.answer[3]}</label>
    <br>
    <button type="submit" class="submit-answer js-submit-answer"><span>Submit</span></button>
    <button type="button" class="next-question js-next-question"><span>Next Question</span></button>
    </form>
    </div>`);
  }

  else if(store.view === 'outro') {
    return (
      `<div class= 'outro-view js-outro-view'>
    <p>Congrats! You finished the quiz!</p>
    <p>You scored ${store.correctAnswerCount} out of 5</p>
    <p>Would you like to retake this quiz?</p>
    <button type="button">Yes I Would!</button> 
    </div>`);
  }
}


//INTRO VIEW: listen for user to click "START" button
function startQuiz(){
  //Listen to user click on "START"
  //Change STORE.View to: 'question'
  //Render Page;
}

//QUESTION VIEW: STORE gets rendered
function handleAnswerSubmit(){
  //Listen for user to "submit" button
  //Condition: (1) If answer, then activate "next"
  //Condition: (2) If blank, then don't activate
}

function processAnswer(){
//Listen for user selections on answers
/* 
ALERT: 
(1)Textual Feedback: Correct OR Wrong OR Blank Answer;
    if Wrong: display Correct Answer
    if Blank: instruct user to select answer
(2)Total correct answers
*/
//User dismiss Alert
}

function handleNextQuestionButton(){
  //Listen for user to click "next" button
  //Condition: Answer must be submitted already
  //nextQuestion();
  //renderPage();
}

function nextQuestion(){ 
  //condition: if questions aren't all answered:
  //add +1 to STORE.questions
  //condition: if questions are all answered:
  //change view to: 'outro'
}

/*
OUTRO VIEW: 
Display Total correct answer
*/

function handlePlayAgainButton() {
  //Listen for user to click "Play Again" button
  //Reset STORE
  //Change view to 'intro'
  //renderPage();
}
