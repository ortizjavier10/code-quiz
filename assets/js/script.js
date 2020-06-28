// //questions
var questions = [
    {
        title: "Commonly used data types DO Not Include:", 
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "the condition in an if / else statement us enclosed with _____.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        title: "Arrays in JavaScript can be used to store _____.", 
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "parenthesis"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugged is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
]

var score = 0 ;
var counter = 0;
var secondsLeft = 75;


// countdown timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return (score)
}


var questionBox = document.getElementById("questionText");
 var choiceA = document.getElementById("abtn");
 var choiceB = document.getElementById("bbtn");
 var choiceC = document.getElementById("cbtn");
 var choiceD = document.getElementById("dbtn");
 
 var answer = "";
 var question = ""; 
 var options = ["","","",""];
 var nextQuestion = 0;
 
 document.querySelector("choice").addEventListener("click",checkAns);
 document.querySelector("#startBtn").addEventListener("click",quizQuestions);
 
 
 
 //Start button calls the timer and question functions
 function questAndTime(){
   setTime();
   sendMessage();
   quizQuestions();
 };
 
 function quizQuestions(){
   question = questions[nextQuestion].title;
   answer = questions[nextQuestion].answer;
   for ( var i = 0; i < questions[nextQuestion].choices.length; i++ ){
   options[i] = questions[nextQuestion].choices[i];}
   
   questionBox.append(question);
   choiceA.append(questions[0].choices[0]);
   choiceB.append(questions[0].choices[1]);
   choiceC.append(questions[0].choices[2]);
   choiceD.append(questions[0].choices[3]);
 }
 
 
 //Check answer function****
 function checkAns(){
 if ( question.choices === questions.answer){ 
     alert("Correct!");
    nextQuestion();
   } else {
       alert("Incorrect");
       wrongAns();
   }
 }
 
 //Next question *********
 function nextQuestion(){
   if( answer === clicked ){ 
     alert("Correct!");
   } else {
       alert("Incorrect");
       wrongAns();
   }
 }
 
   
 //If the answer is wrong this function is called
 function wrongAns() {
   if( questions[i]["choices"] != questions[i]["answer"]) {
     timeEl.textContent = secondsLeft - 15;
     sendMessage();
   }
 }
 






// questions function
// document.getElementById("answerOne").addEventListener("click", function () {
//     if (questions[i]["choices"][0] === questions[i]["answer"]) {
//         messageDiv.textContent = "Correct!";
//         score++;
        
//     }
//     else {
//         messageDiv.textContent = "Wrong!";
//         secondsLeft -= 10;
        
//     }
//     i++;
//     questionSetter();
// })

// document.getElementById("answerTwo").addEventListener("click", function () {
//     if (questions[i]["choices"][1] === questions[i]["answer"]) {
//         messageDiv.textContent = "Correct!";
//         score++;
        
//     }
//     else {
//         messageDiv.textContent = "Wrong!";
//         secondsLeft -= 10;
        
//     }
//     i++;
//     questionSetter();
// })

// document.getElementById("answerThree").addEventListener("click", function () {
//     if (questions[i]["choices"][2] === questions[i]["answer"]) {
//         messageDiv.textContent = "Correct!";
//         score++;
//         correctSound.play();
//     }
//     else {
//         messageDiv.textContent = "Wrong!";
//         secondsLeft -= 10;
//         incorrectSound.play();
//     }
//     i++;
//     questionSetter();
// })

// document.getElementById("answerFour").addEventListener("click", function () {
//     if (questions[i]["choices"][3] === questions[i]["answer"]) {
//         messageDiv.textContent = "Correct!";
//         score++;
//         correctSound.play();
//     }
//     else {
//         messageDiv.textContent = "Wrong!";
//         secondsLeft -= 10;
//         incorrectSound.play();
//     }
//     i++;
//     questionSetter();
// })
