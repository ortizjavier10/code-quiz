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
var question = -1;
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

// score storage
function setScore () {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    getScore;
}

function getScore () {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

    document.getElementById("quizBody").innerHTML = quizContent;
}



// questions function
document.getElementById("answerOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
        
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
        
    }
    i++;
    questionSetter();
})

document.getElementById("answerTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
        
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
        
    }
    i++;
    questionSetter();
})

document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
        incorrectSound.play();
    }
    i++;
    questionSetter();
})

document.getElementById("answerFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
        incorrectSound.play();
    }
    i++;
    questionSetter();
})
