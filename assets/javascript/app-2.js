var questions = {
        q1: ["Which year was the first cell phone made?", "1973", "1981", "1969"],
        q2: ["Which company created the first mobile handset?", "ATT", "Motorola", "Nokia"],
        q3: ["In which year did the first smartphone debut?", "2001", "1998", "1993"],
        q4: ["The 1G network existed in 1980 offering which of the following?", "SMS Only", "Data Only", "Voice Only"],
        q5: ["How was 2G fundamentally different from 1G?", "2G streams music", "2G is digital", "2G is invisible"],
        q6: ["Which is an example of an air interface?", "HSPA", "LTE", "WiMAX"],
        q7: ["Where was the first 3G network launched?", "Australia", "Japan", "Germany"],
        q8: ["What is amplitude modulation most used as?", "Varied Signal", "Analog Wave", "Radio Carrier Wave"],
        q9: ["What is an anode?", "Cathode", "Battery", "Electrode and ACID"],
        q10: ["What is a commutator?", "Moving Part of an Electrical Switch", "Brush", "Motor"]
};

      // Start game with counters at 0.
      var correctCounter, incorrectCounter, unansweredCounter = 0;
      // Variable to hold the index of current question.
      var questionIndex = 0;
      // Array of questions.
      var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, 
      questions.q5, questions.q6, questions.q7, questions.q8, questions.q9, questions.q10];
      var randomQuestion = questionArray[Math.floor(Math.random() * questionsArray.length)];


      // FUNCTIONS
      // ==============================================================================

      function questionAnswerGenerator() {

      //display randomized question from questions array
      randomQuestion++;
      $("#question").html(randomQuestion);
      $(this) = randomQuestion; 

      // display three indices of questions array which are answer choices
      for (var i=1; i < questions[i].length; i++)


        if (questionIndex <= (questionsArray.length - 1)) {
          $("#answer-choices").html = questionIndex][i];

          var html =
          "<p>" + questionIndex][i] + "</p>",
          "<p>" + questionIndex][i] + "</p>",
          "<p>" + questionIndex][i] + "</p>",
        }
        document.querySelector("#answer-choices").innerHTML = html;
      
        /*else {
          document.querySelector(".question-selection").innerHTML = "";
          document.querySelector("").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        }
      }*/


      // Function that updates the score...
      function updateScore() {
        if (questionIndex === 0) {
  
      // var html to store incorrect, correct and unanswered.
        var html =
          "<p>>Great work, here are your final stats!</p>" +
          "<p>Correct Answers: " + computerGuess + "</p>" +
          "<p>Incorrect Answers:" + wins + "</p>" +
          "<p>Unanswered: " + losses + "</p>" +
          "<p onclick="resetGame()">Start Over?</p>";
    }
        // Set the inner HTML contents of div to our html string
        document.querySelector(".gamestats").innerHTML = html;


      // MAIN PROCESS
      // ==============================================================================

      // Calling functions to start the game.
      questionAnswerGenerator();
      updateScore();

      // When the user presses a key, it will run the following function...
      document.

        // If there are no more questions, stop the function.
        if (questionIndex === questionsArray.length) {
          return;
        }

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();

          // If they guess the correct answer, increase and update score, alert them they got it right.
          if (userInput === questionsArray[questionIndex][1]) {
            alert("Correct!");
            correctCounter++;
            updateScore();
          }
          // If wrong, alert them they are wrong.
          else {
            alert("Wrong!");
          }

          // Increment the questionIndex variable and call the renderQuestion function.
          questionIndex++;
          renderQuestion();

        }

      };
