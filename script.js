/* remove this comment and place your JavaScript here */
let position = null;
let posture = null;
let mentality = null;
let pageTitle = document.querySelector('h1');
let pageTitleText = pageTitle.innerHTML;
let tryAgain = document.querySelector("#try-again"),
let quizWrapper = document.querySelector("#quiz-wrapper"),
let result = document.querySelector("#result"),
let formSubmit = document.querySelector("#form-submit") ;
tryAgain.addEventListener("click", resetQuiz);
formSubmit.addEventListener("click", processResults);

function processResults(){


}
function getPersonality(){
let score = 0;
if(position.id === "GK"){
  score += 1
}

}
function resetQuiz(){

}
