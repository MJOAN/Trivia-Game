
var questions = [{
    question: "Which year was the first cell phone made?",
    choices: ["1973", "1981", "1969"],
    answer: "1981"
}, {
    question: "Which company created the first mobile handset?",
    choices: ["ATT", "Motorola", "Nokia"],
    answer: "ATT"
}, {
    question: "In which year did the first smartphone debut?",
    choices: ["2001", "1998", "1993"],
    answer: "1998"
}, {
    question: "The 1G network existed in 1980 offering which of the following?",
    choices: ["SMS Only", "Data Only", "Voice Only"],
    answer: "Data Only"
}, {
    question: "How was 2G fundamentally different from 1G?",
    choices: ["2G streams music", "2G is digital", "2G is invisible"],
    answer: "2G is digital"
}, {
    question: "Which is an example of an air interface?",
    choices: ["HSPA", "LTE", "WiMAX"],
    answer: "HSPA"
}, {
    question: "Where was the first 3G network launched?",
    choices: ["Australia", "Japan", "Germany"],
    answer: "Japan"
}, {
    question: "What is amplitude modulation most used as?",
    choices: ["Varied Signal", "Analog Wave", "Radio Carrier Wave"],
    answer: "Radio Carrier Wave"
}, {
    question: "What is an anode?",
    choices: ["Cathode", "Battery", "Electrode and ACID"],
    answer: "Electrode and ACID"
}, {
    question: "What is a commutator?",
    choices: ["Moving Part of an Electrical Switch", "Brush", "Motor"],
    answer: "Moving Part of an Electrical Switch"
}];


var questionMain = questions[Math.floor(Math.random() * questions.length)];  // with questionIndex === undefined  && question.length === [Object object]
console.log("questionMain: ", questionMain)

var questionIndex = questions.length; 

var panelQuestion = $("#question");
var panelAnswer = $("#choices");

var userguess = "";

console.log("QA: ", panelQuestion, panelAnswer)
console.log("# of Questions", questionIndex)


var counter = 30;
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;

var oot_message = "You are out of time!";
var corr_message = "The correct answer was: ";


// MAIN PROCESS
// ==============================================================================
    $(document).ready(function() { 
        countDown();
        questionGenerator();

    });

// FUNCTIONS
// ==============================================================================

    function countDown() { // works
            var timerInterval = setInterval(thirtySeconds, 1000);

        function thirtySeconds() {
            if (counter === 0) {
                setTimeout(timerInterval, 1000);  
                winLoss();
            }
            if (counter > 0) {
                counter--;
            }
            $("#timer").html("<h2>" + counter + " seconds</h2>");
        }
    };

    function questionGenerator() {  

        panelQuestion.html("<h2>" + questionMain.question + "</h2>"); 

        var input = '';

            for (var i = 0; i < questionMain.choices.length; i++) {
              options = '<input type="radio" name="options" value=' + i + '/>';
              options += questionMain.choices[i];
              
              console.log("Answer Options: ", options)
              panelAnswer.append("<h3> " + options + "  <h3>");
            }
    }

    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }




/*
    function answerChoices() {

        // var to hold our choices array 
        var choices = [];

        for (var i = 0; i < questions.question.choices[i]; i++) {
            choices++;
            console.log(choices);
        }
        // choices += "<p onclick="
        // display choices of questions array 
        $("#answer-choices").html("<p>" + choices[i] + "</p>");
        $("#answer-choices").on("click", answerChoices()).html(choices);
    }  // end questionAnswerGenerator 

    // Function that updates the score...
    function updateScore() {

        // If guess the correct answer, increase and update score, go to next quesiton
        if (userguess === answer) {
            panel.html("<p>" + "Correct!" + "<p>");
            // code to move to next question
            correctCounter++;
            updateScore();
            countDown();

        } else if (userguess === !answer) {
            panel.html("<p>" + oot_message + "<p>");
            $("#answer-choices").html("<p>" + corr_message + answer + "<p>")
            incorrectCounter++
            countDown();

        } else {
            panel.html(oot_message);
            unansweredCounter++;
            countDown();
        }
    }*/

    function winLoss() {
            // if all questions have been generated then output HTML final stats  
            if (questionIndex === 0 || counter === 0) {

                // var html to store incorrect, correct and unanswered.
                var stats =
                    "<p>Great work, here are your final stats!</p>" +
                    "<p>Correct Answers: " + correctCounter + "</p>" +
                    "<p>Incorrect Answers:" + incorrectCounter + "</p>" +
                    "<p>Unanswered: " + unansweredCounter + "</p>"
                    //"<p onclick="">Start Over?</p>";
            }
            // Set the inner HTML contents of div to our html string
            $(".gamestats").html(stats);
        
        }


    
