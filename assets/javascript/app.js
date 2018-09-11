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
var score = 0;
// Variable to hold the index of the current question
var qIndex = 0;
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


// function getRadioVal(form, name) {
//     var val;
//     // get list of radio buttons with specified name
//     var radios = form.elements[name];

//     // loop through list of radio buttons
//     for (var i = 0, len = radios.length; i < len; i++) {
//         if (radios[i].checked) { // radio checked?
//             val = radios[i].value; // if so, hold its value in val
//             // console.log(val);
//             break; // and break out of for loop
//         }
//     }
//     return val; // return value of checked radio or undefined if none checked

//     // get value of selected 'optradio' radio button in 'questionForm'
//     var val = getRadioVal(document.getElementById("questionForm"), "optradio");
//     console.log(val);
// }

// get value of selected 'optradio' radio button in 'questionForm'
// var val = getRadioVal(document.getElementById("questionForm"), "optradio");
// console.log(val);


// $(document).ready(function () {
// $("input[type='button']").click(function () {
//     var radioValue = $("input[name="optradio"]:checked").val();
//     if (radioValue) {
//         alert(radioValue);
//     }
// });

// });


// Checking the value of the selected radio button for each question
// $('input[name=optradio]').click(function () {
//     console.log($('input[name=optradio]:checked').val());
// });

$('input[name=optradio1]').click(function () {
    var userAnswer1 = $('input[name=optradio1]:checked').val();
    console.log(userAnswer1);
    if (userAnswer1 === "USA Today") {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

$('input[name=optradio2]').click(function () {
    var userAnswer2 = $('input[name=optradio2]:checked').val();
    console.log(userAnswer2);
    if (userAnswer2 === "1 million") {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

$('input[name=optradio3]').click(function () {
    var userAnswer3 = $('input[name=optradio3]:checked').val();
    console.log(userAnswer3);
    if (userAnswer3 === "Blitzkrieg") {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

$('input[name=optradio4]').click(function () {
    var userAnswer4 = $('input[name=optradio4]:checked').val();
    console.log(userAnswer4);
    if (userAnswer4 === "St. Nicholas") {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

$('input[name=optradio5]').click(function () {
    var userAnswer5 = $('input[name=optradio5]:checked').val();
    console.log(userAnswer5);
    if (userAnswer5 === "American flag") {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

$('input[name=optradio6]').click(function () {
    var userAnswer6 = $('input[name=optradio6]:checked').val();
    console.log(userAnswer6);
    if (userAnswer6 === "Squeaky Fromme") {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

$('input[name=optradio7]').click(function () {
    var userAnswer7 = $('input[name=optradio7]:checked').val();
    console.log(userAnswer7);
    if (userAnswer7 === "Franklin D. Roosevelt") {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

$('input[name=optradio8]').click(function () {
    var userAnswer8 = $('input[name=optradio8]:checked').val();
    console.log(userAnswer8);
    if (userAnswer8 === "Tim Berners-Lee") {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

$('input[name=optradio9]').click(function () {
    var userAnswer9 = $('input[name=optradio9]:checked').val();
    console.log(userAnswer9);
    if (userAnswer9 === "3") {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

$('input[name=optradio10]').click(function () {
    var userAnswer10 = $('input[name=optradio10]:checked').val();
    console.log(userAnswer10);
    if (userAnswer10 === "Tommy Lee Jones") {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});


// Set timer
var timeLeft = 61;
var intervalId;

$("#start").on("click", timer);

function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeLeft--;
    // console.log(timeLeft);
    $("#show-number").html("<h3>" + timeLeft + "</h3>");
    if (timeLeft === 0) {
        stop();
        alert("Time's Up!");
    }
}

        // }



// }
