var questionObject = {
        question: "Which year was the first cell phone made?",
        choices: "1973",
        "1981",
        "1969",
        answer: 2,
    },
    {
        question: "Which company created the first mobile handset?",
        choices: "ATT",
        "Motorola",
        "Nokia",
        answer: 0,
    },
    {
        question: "In which year did the first smartphone debut?",
        choices: "2001",
        "1998",
        "1993"],
        answer: 2,
    },
    {
        question: "The 1G network existed in 1980 offering which of the following?",
        choices: "SMS Only",
        "Data Only",
        "Voice Only",
        answer: 1,
    }, 
    {
        question: "How was 2G fundamentally different from 1G?",
        choices: "2G streams music",
        "2G is digital",
        "2G is invisible",
        answer: 1,
    }, 
    {
        question: "Which is an example of an air interface?",
        choices: "HSPA",
        "LTE",
        "WiMAX",
        answer: 0,
    }, 
    {
        question: "Where was the first 3G network launched?",
        choices: "Australia",
        "Japan",
        "Germany",
        answer: 2,
    }, 
    {
        question: "What is amplitude modulation most used as?",
        choices: "Varied Signal",
        "Analog Wave",
        "Radio Carrier Wave",
        answer: 3,
    }, 
    {
        question: "What is an anode?",
        choices: "Cathode",
        "Battery",
        "Electrode and ACID",
        answer: 3,
    }, 
    {
        question: "What is a commutator?",
        choices: "Moving Part of an Electrical Switch",
        "Brush",
        "Motor"
        answer: 1,
    },
};

// Start game with counters at 0.
// Variable to hold the index of current question.
// variable for object this === answer, question?
var correctCounter, incorrectCounter, unansweredCounter = 0;
var questionIndex = questionObject.length;
var answer = this.answer[];
var question = this.question[];
var select = $("#answer-choices").on("click", answerChoices()).html();
var userInput = this.select;
var oot_message = "You are out of time!";
var corr_message = "The correct answer was: ";


//$(document).ready(function() { 
// FUNCTIONS
// ==============================================================================

        window.setInterval(function countDown() {
            var timer = 30;
            var timerInterval = setInterval(countdown, 1000);

            if (timer == 0) {
                clearTimeout(timerInterval);
                questionGenerator();
                answerChoices();
                updateScore();

            } else {
                $("#timer").html(timer + "Seconds");
                timer--;
            }
        }

        function questionGenerator() {

            for (var i = 0; i < questionObject.question.length; i++) {
                if (questionObject.question[i]) {
                    question++;
                }
                //display loop question from for loop questions array
                $("#question").html(question);
                $(this) = question;

        
        function answerChoices() {

            // var to hold our choices array 
            var choices = [];

            for (var i = 0; i < questionObject.(this).choices[i]; i++) {
                if (questionObject.(this).choices[i]) {
                    choices++;
                }
                // choices += "<p onclick="
                // display choices of questions array 
                $(this).html("<p>" + choices[i] + "</p>");
                $(".answer-choices").on("click", answerChoices()) html(choices);
            }

        } // end questionAnswerGenerator 

        // Function that updates the score...
        function updateScore() {

            // If guess the correct answer, increase and update score, go to next quesiton
            if (userInput === answer) {
                $("#question").html("<p>" + "Correct!" + "<p>");
                // code to move to next question
                correctCounter++;
                updateScore();
                countDown();

            } else if {
                (userInput === !answer);
                $("#question").html("<p>" + oot_message + "<p>");
                $("#answer-choices").html("<p>" + corr_message + answer + "<p>")

                incorrectCounter++
                countDown();


            } else {
                $("#question").html(oot_message);
                unansweredCounter++;
                countDown();
            }

            // if all questions have been generated then output HTML final stats  
            if (questionIndex === 0) {

                // var html to store incorrect, correct and unanswered.
                var stats =
                    "<p>>Great work, here are your final stats!</p>" +
                    "<p>Correct Answers: " + correctCounter + "</p>" +
                    "<p>Incorrect Answers:" + incorrectCounter + "</p>" +
                    "<p>Unanswered: " + unansweredCounter + "</p>" +
                    "<p onclick="resetGame()">Start Over?</p>";
            }
            // Set the inner HTML contents of div to our html string
            $(".gamestats").html(stats);
            startButton();
            
            $(window).on("load", function(startButton()) {
                // create start button click to start game
                const evt = new Event("build")
                window.dispatchEvent(evt)

                var button = $("<button>");
                button.text("Start Game!";
                $("container").append(button);
            });
                startButton();

                    // MAIN PROCESS
                    // ==============================================================================

            // Calling functions to start the game.
            countDown();
            questionGenerator();
            answerChoices();
            updateScore();
        
        $(document).ready(function() { 

            // If there are no more questions, stop the function.
            if (questionIndex === 0) {
                return;
            }
          
            // Increment the questionIndex variable and call the renderQuestion function.
            questionIndex++;
            countDown();

        }
    }
};