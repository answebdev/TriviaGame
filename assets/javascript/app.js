// Start game - click start reveals questions (radio buttons) and time counter
// Counter starts ticking down
// Create objects that hold questions?
// Put questions inside of Div tags and have them display in the DOM



var questions = {
    q1: ["What was the best-selling newspaper in the U.S. in 2008?", "USA Today"],
    q2: ["How many copies must an album sell to be certified as platinum in the U.S.?", "1 million"],
    q3: ["Which German word means lightning war used in World War II?", "Blitzkrieg"],
    q4: ["Who is the Patron Saint of thieves?", "St. Nicholas"],
    q5: ["What is it illegal to pawn in New York?", "American flag"]
};

// console.log(questions.q3);
var score = 0;
// Variable to hold the index of the current question
var qIndex = 0;
// Array of questions
var qArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

// Start Game

// $(document).ready(function () {
// var timeLeft = 60;
// var intervalId;

// function startGame() {

$("#start").on("click", function (gameContent) {
    $("#game").show();
    gameContent.preventDefault();
});

var timeLeft = 61;
var intervalId;

$("#start").on("click", timer);

function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeLeft--;
    console.log(timeLeft);
    $("#show-number").html("<h3>" + timeLeft + "</h3>");
    if (timeLeft === 0) {
        stop();
        alert("Time Up!");
    }
}

        // }



// }