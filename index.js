'use strict';
/* global $ */

const STORE = {
  questions: [
    {question: q1, answered: false, correct: null}, 
    {question: q2, answered: false, correct: null}, 
    {question: q3, answered: false, correct: null}, 
    {question: q4, answered: false, correct: null}, 
    {question: q5, answered: false, correct: null}
  ],
  view: 'intro',
  correctAnswerCount: 0
}; 

const q1 = {
  question: 'What is the capital of California?',
  answer: ['Los Angeles', 'Sacramento', 'San Francisco', 'Anaheim'],
  answerKey: 1 //a
}
const q2 = {
  question:'Where is Mt. Rushmore located?',
  answer:['Washington D.C', 'Virginia', 'Montana', 'South Dakota'],
  answerKey: 3 //d
}
const q3 = {
  question: 'What is the biggest state in the United States?',
  answer: ['Delaware', 'Texas', 'California', 'Alaska'],
  answerKey: 3 //d
}
const q4 = {
  question: 'Which countries are below the equator?',
  answer: ['Costa Rica', 'Ethiopia', 'Peru', 'Iraq'],
  answerKey: 2 //c
}
const q5 = {
  question:'Which one is NOT a continent?',
  answer: ['North America', 'Austraulia', 'Russia', 'Africa'],
  answerKey: 2 //c
}

//Rendering
function renderPage(){
  //Render STORE to DOM
}

function generateQuestionElement(){
  //Condition: State
  //Add in HTML
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
}
/* 
ALERT: 
(1)Textual Feedback: Correct OR Wrong OR Blank Answer;
    if Wrong: display Correct Answer
    if Blank: instruct user to select answer
(2)Total correct answers
*/
//User dismiss Alert

function handleNextQuestionButton(){
  //Listen for user to click "next" button
  //Condition: Answer must be submitted already
  //nextQuestion();
  //renderPage();

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

function handlePlayAgainButton(){
  //Listen for user to click "Play Again" button
  //Reset STORE
  //Change view to 'intro'
  //renderPage();
}