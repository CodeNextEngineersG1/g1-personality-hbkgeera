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
if(position.id === "gk"){
  score += 1;
}
else if(position.id === "forward"){
  score += 2;
}
else if(position.id === "midfielder"){
  score += 3;
}
else if(position.id === "defender"){
  score += 4;
}
if(posture.id === "De-Gea"){
  score += 1;
}
else if (posture.id === "Ronaldo"){
  score += 2;

}
else if (posture.id === "Isco"){
  score += 3;

}
else if (posture.id === "Marcelo"){
  score += 4;

}
if(mentality.id === "Tough"){
  score += 1;
}
else if(mentality.id === "scorer"){
  score += 2;
}
else if(mentality.id === "play-maker"){
  score += 3;
}
else if(mentality.id === "Lock-down"){
  score += 4;
}

if(score == 10 || score == 11 || score ==12){
  return 1;
}
else if(score == 6 || score == 7 || score ==8){
  return 2;
}
else if(score == 3 || score == 4 || score ==5){
  return 3;
}
else if(score == 8 || score == 9 ){
  return 4;
}



}
function resetQuiz(){

}
