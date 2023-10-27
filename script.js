var startButton = document.getElementById("start-button");
var correctCount = 0
var timerCount = 600
var generateQuestion = document.getElementById("asked-question")

function timerdecrease() {timerCount--}
console.log(timerCount)

function startQuiz() {
    
var gameDescription = document.getElementById("game-description")
gameDescription.style.display = "none";
generateQuestion.innerHTML = "What does the abbreviation 'DOM' mean?"
var mainTitle = document.getElementById("main-title");
mainTitle.style.display = "none";
setInterval(timerdecrease, 1000)

var answerButton1 = document.createElement('button');
answerButton1.textContent = "answer1";
answerButton1.classList.add("multiple-choice");
document.body.appendChild(answerButton1);

var answerText1 = document.createElement('p');
answerText1.innerHTML = "Document Object Model";
document.body.appendChild(answerText1);
answerText1.style.display = "inline";

var answerButton2 = document.createElement('button');
answerButton2.textContent = "answer2";
answerButton2.classList.add("multiple-choice");
document.body.appendChild(answerButton2);

var answerText2 = document.createElement('p');
answerText2.innerHTML = "Document Opposed Module";
document.body.appendChild(answerText2);
answerText2.style.display = "inline";

var answerButton3 = document.createElement('button');
answerButton3.textContent = "answer3";
answerButton3.classList.add("multiple-choice")
document.body.appendChild(answerButton3);

var answerText3 = document.createElement('p');
answerText3.innerHTML = "Delayed Object Modulation";
document.body.appendChild(answerText3);
answerText3.style.display = "inline";

var answerButton4 = document.createElement('button');
answerButton4.textContent = "answer4";
answerButton4.classList.add("multiple-choice")
answerButton1.style.marginTop = "50px";
document.body.appendChild(answerButton4);

var answerText4 = document.createElement('p');
answerText4.innerHTML = "Decoding Only Material";
document.body.appendChild(answerText4);
answerText4.style.display = "inline";

}


//event listener at start button
startButton.addEventListener("click", startQuiz);
