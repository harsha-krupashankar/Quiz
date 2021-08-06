function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What are the basic needs for a human?", ["School", "Water","Air", "Water and Air"], "Water and Air"),

    new Question("Which months have 31 days?", ["February", "January","May", "July"], "January" ),
    
    new Question("Which colors are in rainbow?", ["Black", "Red","Green", "Both Red and Green"], "Both Red and Green"),
    
    new Question("Which are the top 4 social media apps?", ["YouTube", "Instagram","Facebook", "Twitter"], "Instagram"),
    
    new Question("Which are the four vedas?", ["Yajur-Veda", "Rig-Veda,Atharva-Veda","Sama-Veda", "All the above"], "All the above")
        

];


var quiz = new Quiz(questions);


populate();




















