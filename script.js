var startButton = document.getElementById("start-button");
var correctCount = 0
var timerCount = 600
var generateQuestion = document.getElementById("asked-question")
var questionsAnswered = 0

function timerdecrease() {timerCount--}
console.log(timerCount)

function answerClicked() {
    questionsAnswered++
    if(questionsAnswered === 1) {
        generateQuestion.innerHTML = "What does HTML stand for?"
        document.getElementById("answer-button1").textContent = "Hyper Text Markup Language";
        document.getElementById("answer-button2").textContent = "Hyper Text Module Language";
        document.getElementById("answer-button3").textContent = "Hyper Test Modulation Linguistics";
        document.getElementById("answer-button4").textContent = "Does not mean anything";
        if(answerButton2.onclick || answerButton3.onclick || answerButton4.onclick === !correct) {timerCount - 10}
        else {correct, correctCount++}
        console.log(`this is $(correct) $(correctCount) times`)
    }
    if(questionsAnswered === 2) {
        generateQuestion.innerHTML = "What letters are missing from 'J_v_ Scr_pt?"
        document.getElementById("answer-button1").textContent = "a a c";
        document.getElementById("answer-button2").textContent = "a i u";
        document.getElementById("answer-button3").textContent = "a a i";
        document.getElementById("answer-button4").textContent = "i u i";
    }
    if(questionsAnswered === 3) {
        generateQuestion.innerHTML = "what do you type to create a comment for Javascript?"
        document.getElementById("answer-button1").textContent = "**-";
        document.getElementById("answer-button2").textContent = "//";
        document.getElementById("answer-button3").textContent = "-=-";
        document.getElementById("answer-button4").textContent = "~~";
    }
    if(questionsAnswered === 4) {
        if(correctCount === 4) {
            generateQuestion.innerHTML = "Congratulations you won!"}
            else {generateQuestion.innerHTML = `Sorry you only had ${correctCount} answers correct. Try again!`}
            document.getElementById("answer-button1").remove();
            document.getElementById("answer-button2").remove();
            document.getElementById("answer-button3").remove();
            document.getElementById("answer-button4").remove();
            document.getElementById("timer").remove();
    }
}

function startQuiz() {
    
    var correct = false
    var gameDescription = document.getElementById("game-description")
    gameDescription.style.display = "none";
    generateQuestion.innerHTML = "What does the abbreviation 'DOM' mean?"
    var mainTitle = document.getElementById("main-title");
    mainTitle.style.display = "none";
/* setInterval(timerdecrease, 1000) */

var decideCorrectAnswer = function(correct) {
    if(correct) {correctCount++}
    else {timerCount - 10;}
}


var answerButton1 = document.createElement('button');
answerButton1.textContent = "Document Object Model";
answerButton1.classList.add("multiple-choice");
answerButton1.style.marginTop = "50px";
answerButton1.id = "answer-button1";
answerButton1.onclick = answerClicked;
console.log(correctCount)
document.body.appendChild(answerButton1);

var answerButton2 = document.createElement('button');
answerButton2.textContent = "Document Opposed Module";
answerButton2.classList.add("multiple-choice");
answerButton2.id = "answer-button2";
answerButton2.onclick = answerClicked;
document.body.appendChild(answerButton2);

var answerButton3 = document.createElement('button');
answerButton3.textContent = "Delayed Object Modulation";
answerButton3.classList.add("multiple-choice");
answerButton3.id = "answer-button3";
answerButton3.onclick = answerClicked;
document.body.appendChild(answerButton3);

/* var answerText3 = document.createElement('p');
answerText3.innerHTML = "Delayed Object Modulation";
document.body.appendChild(answerText3);
answerText3.style.display = "inline"; */

var answerButton4 = document.createElement('button');
answerButton4.textContent = "Decoding Only Material";
answerButton4.classList.add("multiple-choice");
answerButton4.id = "answer-button4";
answerButton4.onclick = answerClicked;
document.body.appendChild(answerButton4);

/* var timerText = document.createElement('p');
timerText.innerHTML = `${timerCount} seconds remain`;
document.body.appendChild(timerText);
timerText.style.display = "block"; */



var correctWrongAnswer = "Wrong"
var correctWrongIndicator = document.createElement('p');
if(correctCount >= 1) {
    if (correct === true) {correctWrongAnswer = "correct";}
    else {correctWrongAnswer = "incorrect";}
}
correctWrongIndicator.innerHTML = `${correctWrongAnswer} answer`;
document.body.appendChild(correctWrongIndicator);
correctWrongIndicator.style.display = "block";

}


//event listener at start button
startButton.addEventListener("click", startQuiz);
