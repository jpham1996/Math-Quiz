// Variable qNumber is the represents the current progress of the quiz, in terms of which question the user is at.  
var qNumber = 0, quiz, status, question, selectedChoice, options, optionA, optionB, optionC, optionD, correctAnswers = 0;
/** Quiz content, which has a multidimensional array with 10 inner array elements with 6 elements inside each of them.  
* An alternative way is to store quiz contents within a database, which will require PHP and mySQL.  
*/
         
// The array quizContent contains the current questions.  
var quizContent = [
    ["5 x 5 = ", "20", "25", "15", "30", "B"],
    ["100 x 0 = ", "0", "100", "50", "25", "A"],
    ["4 x 2 = ", "8", "16", "6", "12", "A"],
    ["8 x 7 = ", "8", "32", "56", "24", "C"],
    ["6 x 9 = ", "36", "48", "42", "54", "D"],
    ["3 x 12 = ", "12", "48", "24", "36", "D"],
    ["1 x 15 = ", "30", "15", "60", "45", "B"],
    ["4 x 5 = ", "10", "30", "20", "40", "C"],
    ["10 x 10 = ", "10", "100", "200", "300", "B"],
    ["3 x 14 = ", "42", "14", "56", "28", "A"]
];

// This "get" function is short for the getElementById function.           
function get(x) {
    return document.getElementById(x);
}

function newQuestion() {
    quiz = get("quiz");

    if (qNumber >= quizContent.length) {
        quizCompleted();
        return false;
    }
	
	questionSetUp();
	unansweredQuestion();
}
         
function checkAnswer() {
    /** Use getElementsByName to check each option, 
     * then use a for loop to loop through those options. 
     */
    options = document.getElementsByName("options");
    selectedChoice = "";
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedChoice = options[i].value;
        }
    }

    // Checks whether if the answer matches the correct option.  
    if (selectedChoice == quizContent[qNumber][5]) {
        // Each time there is a correct answer, the value correctAnswer icrements.  
        correctAnswers++;
        quiz = get("quiz");
        if (qNumber >= quizContent.length) {
			quizCompleted(); 
            return false;
        }

        questionSetUp();
		answeredQuestion(); 

        quiz.innerHTML += "<button id='submitAnswer' onclick='checkAnswer()'>Submit</button>";
        quiz.innerHTML += "<button onclick='nextQuestion()'>Next</button>";

        var btn = get('submitAnswer');
        btn.disabled = true;

    } 
	
	// If no choice is selected, display a warning message.  
	else if (selectedChoice == "") {
        questionSetUp();
        unansweredQuestion();
        quiz.innerHTML += "<br></br><span style='color:red;'><b><i><u>Please choose at least one answer.  </u></i></b></span>";
    } 
	
	else {
        quiz = get("quiz");
        if (qNumber >= quizContent.length) {
            quizCompleted();
            return false;
        }

        questionSetUp();
        answeredQuestion();

        quiz.innerHTML += "<button id='submitAnswer' onclick='checkAnswer()'>Submit</button>";
        quiz.innerHTML += "<button onclick='nextQuestion()'>Next</button>";
        var btn = get('submitAnswer');
        btn.disabled = true;
    }

}

// Equalize the following variables to the variables from quizContent indexes.  
function questionSetUp() {
    get("status").innerHTML = "Question " + (qNumber + 1) + "/" + quizContent.length;
    question = quizContent[qNumber][0];
    optionA = quizContent[qNumber][1];
    optionB = quizContent[qNumber][2];
    optionC = quizContent[qNumber][3];
    optionD = quizContent[qNumber][4];
}

/** Add HTML codes via JavaScript for each question and its options.  
* Unanswered question format, that means there is no color coding.  
*/
function unansweredQuestion() {
	/** Displays the question number and its contents.  
    * Generate HTML codes via JavaScript.  
    * The += appends to the data that is created above.  
    */

    quiz.innerHTML = "<h3>" + question + "</h3><br></br>";

    quiz.innerHTML += "<input type='radio' name='options' value='A'> " + optionA + "<br></br>";
    quiz.innerHTML += "<input type='radio' name='options' value='B'> " + optionB + "<br></br>";
    quiz.innerHTML += "<input type='radio' name='options' value='C'> " + optionC + "<br></br>";
    quiz.innerHTML += "<input type='radio' name='options' value='D'> " + optionD + "<br></br><br></br>";
    quiz.innerHTML += "<button id='submitAnswer' onclick='checkAnswer()'>Submit</button>";
    quiz.innerHTML += "<button onclick='nextQuestion()' disabled>Next</button>";
}

/** Add HTML codes via JavaScript for each question and its options.  
* Color the wrong answers red and correct answers green.    
*/
function answeredQuestion() {
    if (selectedChoice == 'A') {
        optionA = "<span style='color:green'>" + optionA + "</span>";
        optionB = "<span style='color:red'>" + optionB + "</span>";
        optionC = "<span style='color:red'>" + optionC + "</span>";
        optionD = "<span style='color:red'>" + optionD + "</span>";
    } else if (selectedChoice == 'B') {
        optionA = "<span style='color:red'>" + optionA + "</span>";
        optionB = "<span style='color:green'>" + optionB + "</span>";
        optionC = "<span style='color:red'>" + optionC + "</span>";
        optionD = "<span style='color:red'>" + optionD + "</span>";
    } else if (selectedChoice == 'C') {
        optionA = "<span style='color:red'>" + optionA + "</span>";
        optionB = "<span style='color:red'>" + optionB + "</span>";
        optionC = "<span style='color:green'>" + optionC + "</span>";
        optionD = "<span style='color:red'>" + optionD + "</span>";
    } else {
        optionA = "<span style='color:red'>" + optionA + "</span>";
        optionB = "<span style='color:red'>" + optionB + "</span>";
        optionC = "<span style='color:red'>" + optionC + "</span>";
        optionD = "<span style='color:green'>" + optionD + "</span>";
    }

    quiz.innerHTML = "<h3>" + question + "</h3><br></br>";

    // The += appends to the data that is started on the line above.  

    if (selectedChoice == 'A') {
        quiz.innerHTML += "<input type='radio' name='options' checked value='A'> " + optionA + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' value='B'> " + optionB + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' value='C'> " + optionC + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' value='D'> " + optionD + "<br></br><br></br>";
    } else if (selectedChoice == 'B') {
        quiz.innerHTML += "<input type='radio' name='options' value='A'> " + optionA + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' checked value='B'> " + optionB + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' value='C'> " + optionC + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' value='D'> " + optionD + "<br></br><br></br>";
    } else if (selectedChoice == 'C') {
        quiz.innerHTML += "<input type='radio' name='options' value='A'> " + optionA + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' value='B'> " + optionB + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' checked value='C'> " + optionC + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' value='D'> " + optionD + "<br></br><br></br>";
    } else {
        quiz.innerHTML += "<input type='radio' name='options' value='A'> " + optionA + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' value='B'> " + optionB + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' value='C'> " + optionC + "<br></br>";
        quiz.innerHTML += "<input type='radio' name='options' checked value='D'> " + optionD + "<br></br><br></br>";
    }
}

// Get to the next function.  
function nextQuestion() {
    // Use for loop to check the options.  
    options = document.getElementsByName("options");
    selectedChoice = "";
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedChoice = options[i].value;
        }
    }
	
	qNumber++;
    // The newQuestion function runs again to go to next question.  
    newQuestion();
}

// Add HTML codes via JavaScript for the score page.  
function quizCompleted() {
    quiz.innerHTML = "<h2>You got " + correctAnswers + " of " + quizContent.length + " questions correct.   </h2>";
    // Display this text message on top of the screen.  
    get("status").innerHTML = "You have completed the quiz!  ";
    // Resets the question number, so when the user restart the quiz, it starts at first question.  
    qNumber = 0;
    // Resets the number of correct answers to 0.  
    correctAnswers = 0;
    // Stops rest of function running when quiz is completed.  
}

window.addEventListener("load", newQuestion, false);