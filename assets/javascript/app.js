// Start game - click start reveals questions (radio buttons) and time counter
// Counter starts ticking down
// Create objects that hold questions?
// Put questions inside of Div tags and have them display in the DOM



// var questions = {
//     q1: ["What was the best-selling newspaper in the U.S. in 2008?", "USA Today"],
//     q2: ["How many copies must an album sell to be certified as platinum in the U.S.?", "1 million"],
//     q3: ["Which German word means lightning war used in World War II?", "Blitzkrieg"],
//     q4: ["Who is the patron saint of thieves?", "St. Nicholas"],
//     q5: ["What is it illegal to pawn in New York?", "American flag"],
//     q6: ["Which follower of cult leader Charles Manson tried to assassinate then-president Gerald R. Ford?", "Squeaky Fromme"],
//     q7: ["Who was the first American president to appear on TV?", "Franklin D. Roosevelt"],
//     q8: ["Who invented the World Wide Web?", "Tim Berners-Lee"],
//     q9: ["How many teaspoons are in a tablespoon?", "3"],
//     q10: ["Who did not win an acting award at the 2008 Academy Awards?", "Tommy Lee Jones"]
// };

// console.log(questions.q3);
// var correct = 0;
// var incorrect = 0;
// Variable to hold the index of the current question
// var qIndex = 0;
// Array of questions
// var qArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

// Start Game

// $(document).ready(function () {
// var timeLeft = 60;
// var intervalId;

// function startGame() {

$("#start").on("click", function (gameContent) {
    $("#game").show();
    gameContent.preventDefault();
});

// Hide the jumbotron when clicking Start button
$("#start").on("click", function (gameContent) {
    $(".jumbotron").hide();
    gameContent.preventDefault();
});


// var userGuesses = [];
var right = [];
var wrong = [];

// $('input[name=optradio1]').click(function () {
// });

// $('input[name=optradio2]').click(function () {
// });

// $('input[name=optradio3]').click(function () {
// });

// $('input[name=optradio4]').click(function () {
// });

// $('input[name=optradio5]').click(function () {
// });

// $('input[name=optradio6]').click(function () {
// });

// $('input[name=optradio7]').click(function () {
// });

// $('input[name=optradio8]').click(function () {
// });

// $('input[name=optradio9]').click(function () {
// });

// $('input[name=optradio10]').click(function () {
// });


// Set timer
// var timeLeft = 61;
var timeLeft = 5;
var intervalId;

$("#start").on("click", timer);
//  When the Done button gets clicked, run the stop function (defined below).
$("#done").on("click", stop);

function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeLeft--;
    // console.log(timeLeft);
    // $("#score-board").show();
    $("#show-number").html("<h3>" + timeLeft + "</h3>");
    if (timeLeft === 0) {
        // stop();
        clearInterval(intervalId);
        $("#score-board").show();
        $("#game").hide();
        alert("Time's Up!");

        var userAnswer1 = $('input[name=optradio1]:checked').val();
        console.log(userAnswer1);
        if (userAnswer1 === "USA Today") {
            // console.log("Correct!");
            right.push(userAnswer1);
        } else {
            // console.log("Wrong!");
            wrong.push(userAnswer1);
        }
        var userAnswer2 = $('input[name=optradio2]:checked').val();
        console.log(userAnswer2);
        if (userAnswer2 === "1 million") {
            right.push(userAnswer2);
        } else {
            wrong.push(userAnswer2);
        }
        var userAnswer3 = $('input[name=optradio3]:checked').val();
        console.log(userAnswer3);
        if (userAnswer3 === "Blitzkrieg") {
            right.push(userAnswer3);
        } else {
            wrong.push(userAnswer3);
        }
        var userAnswer4 = $('input[name=optradio4]:checked').val();
        console.log(userAnswer4);
        if (userAnswer4 === "St. Nicholas") {
            right.push(userAnswer4);
        } else {
            wrong.push(userAnswer4);
        }
        var userAnswer5 = $('input[name=optradio5]:checked').val();
        console.log(userAnswer5);
        if (userAnswer5 === "American flag") {
            right.push(userAnswer5);
        } else {
            wrong.push(userAnswer5);
        }
        var userAnswer6 = $('input[name=optradio6]:checked').val();
        console.log(userAnswer6);
        if (userAnswer6 === "Squeaky Fromme") {
            right.push(userAnswer6);
        } else {
            wrong.push(userAnswer6);
        }
        var userAnswer7 = $('input[name=optradio7]:checked').val();
        console.log(userAnswer7);
        if (userAnswer7 === "Franklin D. Roosevelt") {
            right.push(userAnswer7);
        } else {
            wrong.push(userAnswer7);
        }
        var userAnswer8 = $('input[name=optradio8]:checked').val();
        console.log(userAnswer8);
        if (userAnswer8 === "Tim Berners-Lee") {
            right.push(userAnswer8);
        } else {
            wrong.push(userAnswer8);
        }
        var userAnswer9 = $('input[name=optradio9]:checked').val();
        console.log(userAnswer9);
        if (userAnswer9 === "3") {
            right.push(userAnswer9);
        } else {
            wrong.push(userAnswer9);
        }
        var userAnswer10 = $('input[name=optradio10]:checked').val();
        console.log(userAnswer10);
        if (userAnswer10 === "Tommy Lee Jones") {
            right.push(userAnswer10);
        } else {
            wrong.push(userAnswer10);
        }

        console.log("Right Array: " + right + " || Wrong Array: " + wrong);

        //====================================================================================

        // Remove duplicates from right array here
        function removeRightDuplicates(arrRight) {
            let cleanedRightArray = [];
            for (let i = 0; i < arrRight.length; i++) {
                if (cleanedRightArray.indexOf(arrRight[i]) == -1) {
                    cleanedRightArray.push(arrRight[i])
                }
            }
            return cleanedRightArray;
        }

        console.log("Cleaned RIGHT Array: " + removeRightDuplicates(right));
        console.log("Cleaned WRONG Array: " + removeWrongDuplicates(wrong));

        var totalRight = right.length;
        console.log("Total Right = " + totalRight);
        var totalWrong = wrong.length;
        console.log("Total Wrong = " + totalWrong);
        var totalUnanswered = 10 - (totalRight + totalWrong);
        console.log("Total Unanswered = " + totalUnanswered);

        // console.log("Unanswered = " +);

        document.getElementById("correct").innerHTML = "<h5>Correct Answers: " + totalRight + "</h5> ";
        document.getElementById("incorrect").innerHTML = "<h5>Inorrect Answers: " + totalWrong + "</h5> ";
        // document.getElementById("unanswered").innerHTML = "<h5>Unanswered: " + totalWrong + "</h5> ";


        //====================================================================================

        // Remove duplicates from wrong array here
        function removeWrongDuplicates(arrWrong) {
            let cleanedWrongArray = [];
            for (let i = 0; i < arrWrong.length; i++) {
                if (cleanedWrongArray.indexOf(arrWrong[i]) == -1) {
                    cleanedWrongArray.push(arrWrong[i])
                }
            }
            return cleanedWrongArray;
        }
    }
}

// Show the totals when clicking Done button
$("#done").on("click", function (gameContent) {
    $("#score-board").show();
    gameContent.preventDefault();
});

// Hide the questions when clicking Done button
$("#done").on("click", function (gameContent) {
    $("#game").hide();
    gameContent.preventDefault();
});

// Hide the jumbotron when clicking Done button
$("#done").on("click", function (gameContent) {
    $(".jumbotron").hide();
    gameContent.preventDefault();
});

// Play again: Show game page again
// $("#again").on("click", function (gameContent) {
//     $("#game").show();
//     gameContent.preventDefault();
// });

function stop() {
    clearInterval(intervalId);

    // $("#done").on("click", function (gameContent) {
    //     $("#score-board").show();
    //     gameContent.preventDefault();
    // });

    // Variables that hold references to the places in the HTML where we want to display things.
    // var correctAnswers = document.getElementById("correct");
    // document.getElementById("correct").innerHTML = totalRight;

    // $(document).ready(function(){
    // $("#hide").click(function(){
    //     $("p").hide();
    // });
    // $("#done").click(function(){
    //     $("#score-board").show();
    // });
    // });

    var userAnswer1 = $('input[name=optradio1]:checked').val();
    console.log(userAnswer1);
    if (userAnswer1 === "USA Today") {
        // console.log("Correct!");
        right.push(userAnswer1);
    } else {
        // console.log("Wrong!");
        wrong.push(userAnswer1);
    }
    var userAnswer2 = $('input[name=optradio2]:checked').val();
    console.log(userAnswer2);
    if (userAnswer2 === "1 million") {
        right.push(userAnswer2);
    } else {
        wrong.push(userAnswer2);
    }
    var userAnswer3 = $('input[name=optradio3]:checked').val();
    console.log(userAnswer3);
    if (userAnswer3 === "Blitzkrieg") {
        right.push(userAnswer3);
    } else {
        wrong.push(userAnswer3);
    }
    var userAnswer4 = $('input[name=optradio4]:checked').val();
    console.log(userAnswer4);
    if (userAnswer4 === "St. Nicholas") {
        right.push(userAnswer4);
    } else {
        wrong.push(userAnswer4);
    }
    var userAnswer5 = $('input[name=optradio5]:checked').val();
    console.log(userAnswer5);
    if (userAnswer5 === "American flag") {
        right.push(userAnswer5);
    } else {
        wrong.push(userAnswer5);
    }
    var userAnswer6 = $('input[name=optradio6]:checked').val();
    console.log(userAnswer6);
    if (userAnswer6 === "Squeaky Fromme") {
        right.push(userAnswer6);
    } else {
        wrong.push(userAnswer6);
    }
    var userAnswer7 = $('input[name=optradio7]:checked').val();
    console.log(userAnswer7);
    if (userAnswer7 === "Franklin D. Roosevelt") {
        right.push(userAnswer7);
    } else {
        wrong.push(userAnswer7);
    }
    var userAnswer8 = $('input[name=optradio8]:checked').val();
    console.log(userAnswer8);
    if (userAnswer8 === "Tim Berners-Lee") {
        right.push(userAnswer8);
    } else {
        wrong.push(userAnswer8);
    }
    var userAnswer9 = $('input[name=optradio9]:checked').val();
    console.log(userAnswer9);
    if (userAnswer9 === "3") {
        right.push(userAnswer9);
    } else {
        wrong.push(userAnswer9);
    }
    var userAnswer10 = $('input[name=optradio10]:checked').val();
    console.log(userAnswer10);
    if (userAnswer10 === "Tommy Lee Jones") {
        right.push(userAnswer10);
    } else {
        wrong.push(userAnswer10);
    }
    console.log("Right Array: " + right + " || Wrong Array: " + wrong);

    //====================================================================================

    // Remove duplicates from right array here
    function removeRightDuplicates(arrRight) {
        let cleanedRightArray = [];
        for (let i = 0; i < arrRight.length; i++) {
            if (cleanedRightArray.indexOf(arrRight[i]) == -1) {
                cleanedRightArray.push(arrRight[i])
            }
        }
        return cleanedRightArray;
    }

    console.log("Cleaned RIGHT Array: " + removeRightDuplicates(right));
    console.log("Cleaned WRONG Array: " + removeWrongDuplicates(wrong));

    var totalRight = right.length;
    console.log("Total Right = " + totalRight);
    var totalWrong = wrong.length;
    console.log("Total Wrong = " + totalWrong);

    // console.log("Unanswered = " +);

    document.getElementById("correct").innerHTML = "<h5>Correct Answers: " + totalRight + "</h5> ";
    document.getElementById("incorrect").innerHTML = "<h5>Inorrect Answers: " + totalWrong + "</h5> ";
    // document.getElementById("unanswered").innerHTML = "<h5>Unanswered: " + totalWrong + "</h5> ";


    //====================================================================================

    // Remove duplicates from wrong array here
    function removeWrongDuplicates(arrWrong) {
        let cleanedWrongArray = [];
        for (let i = 0; i < arrWrong.length; i++) {
            if (cleanedWrongArray.indexOf(arrWrong[i]) == -1) {
                cleanedWrongArray.push(arrWrong[i])
            }
        }
        return cleanedWrongArray;
    }


    //====================================================================================
}


// }



// }


// 1. Push user answers into a correct and incorrect array - push answers into array
// as soon as timer reaches zero or the Done button is clicked --- DONE

// movies.push(movie);

// 2. Get rid of duplicates in the array that the answers have been pushed into (and
// push into a new array without duplicates?) --- DONE

// 3. Count how many correct/incorrect answers the user has (use .length? --> length of
// array equals the total number correct/incorrect?)

// 4. Display totals in browser