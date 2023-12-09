var questions = document.getElementsByClassName('ques-sec'); 
var answers = document.getElementsByClassName('answer');
var arrows = document.getElementsByClassName('arrow');

for (var i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function() {
    console.log(i)
    for (var j = 0; j < answers; j++) { 
        if(i===j){
      answers[j].classList.add('increase');
    }
}
  });
}
