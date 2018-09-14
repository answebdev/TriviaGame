// Start game
$("#start").on("click", function (gameContent) {
    $("#game").show();
    gameContent.preventDefault();
});

// Show Navbar when clicking Start button
$("#start").on("click", function (gameContent) {
    $(".navbar").show();
    gameContent.preventDefault();
});

// Hide the jumbotron when clicking Start button
$("#start").on("click", function (gameContent) {
    $(".jumbotron").hide();
    gameContent.preventDefault();
});

var right = [];
var wrong = [];
var intervalId;

$("#start").on("click", timer);
//  When the Done button gets clicked, run the stop function (defined below).
$("#done").on("click", stop);

function timer() {
    timeLeft = 60;
    $("#show-number").empty();
    right = [];
    wrong = [];
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeLeft--;
    $("#show-number").html("<h3>" + timeLeft + "</h3>");
    if (timeLeft === 0) {
        clearInterval(intervalId);
        $("#score-board").show();
        $("#game").hide();
        $(".navbar").hide();
        alert("Time's Up!");

        var userAnswer1 = $('input[name=optradio1]:checked').val();
        if (userAnswer1 === "USA Today") {
            right.push(userAnswer1);
        } else if (userAnswer1) {
            wrong.push(userAnswer1);
        }
        var userAnswer2 = $('input[name=optradio2]:checked').val();
        if (userAnswer2 === "1 million") {
            right.push(userAnswer2);
        } else if (userAnswer2) {
            wrong.push(userAnswer2);
        }
        var userAnswer3 = $('input[name=optradio3]:checked').val();
        if (userAnswer3 === "Blitzkrieg") {
            right.push(userAnswer3);
        } else if (userAnswer3) {
            wrong.push(userAnswer3);
        }
        var userAnswer4 = $('input[name=optradio4]:checked').val();
        if (userAnswer4 === "St. Nicholas") {
            right.push(userAnswer4);
        } else if (userAnswer4) {
            wrong.push(userAnswer4);
        }
        var userAnswer5 = $('input[name=optradio5]:checked').val();
        if (userAnswer5 === "American flag") {
            right.push(userAnswer5);
        } else if (userAnswer5) {
            wrong.push(userAnswer5);
        }
        var userAnswer6 = $('input[name=optradio6]:checked').val();
        if (userAnswer6 === "Squeaky Fromme") {
            right.push(userAnswer6);
        } else if (userAnswer6) {
            wrong.push(userAnswer6);
        }
        var userAnswer7 = $('input[name=optradio7]:checked').val();
        if (userAnswer7 === "Franklin D. Roosevelt") {
            right.push(userAnswer7);
        } else if (userAnswer7) {
            wrong.push(userAnswer7);
        }
        var userAnswer8 = $('input[name=optradio8]:checked').val();
        if (userAnswer8 === "Tim Berners-Lee") {
            right.push(userAnswer8);
        } else if (userAnswer8) {
            wrong.push(userAnswer8);
        }
        var userAnswer9 = $('input[name=optradio9]:checked').val();
        if (userAnswer9 === "3") {
            right.push(userAnswer9);
        } else if (userAnswer9) {
            wrong.push(userAnswer9);
        }
        var userAnswer10 = $('input[name=optradio10]:checked').val();
        if (userAnswer10 === "Tommy Lee Jones") {
            right.push(userAnswer10);
        } else if (userAnswer10) {
            wrong.push(userAnswer10);
        }

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

        document.getElementById("correct").innerHTML = "<h5>Correct Answers: " + totalRight + "</h5> ";
        document.getElementById("incorrect").innerHTML = "<h5>Incorrect Answers: " + totalWrong + "</h5> ";
        document.getElementById("unanswered").innerHTML = "<h5>Unanswered: " + totalUnanswered + "</h5> ";

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

// Hide the Navbar when clicking Done button
$("#done").on("click", function (gameContent) {
    $(".navbar").hide();
    gameContent.preventDefault();
});

// Hide the jumbotron when clicking Done button
$("#done").on("click", function (gameContent) {
    $(".jumbotron").hide();
    gameContent.preventDefault();
});

// Show the Jumbotron again after clicking Play Again button
$("#again").on("click", function (gameContent) {
    $(".jumbotron").show();
    gameContent.preventDefault();
    // Restart timer after showing questions again
    $("#start").on("click", timer);
});

// Hide the totals when clicking Play Again button
$("#again").on("click", function (gameContent) {
    $("#score-board").hide();
    gameContent.preventDefault();
});

function stop() {
    clearInterval(intervalId);

    var userAnswer1 = $('input[name=optradio1]:checked').val();
    if (userAnswer1 === "USA Today") {
        right.push(userAnswer1);
    } else if (userAnswer1) {
        wrong.push(userAnswer1);
    }
    var userAnswer2 = $('input[name=optradio2]:checked').val();
    if (userAnswer2 === "1 million") {
        right.push(userAnswer2);
    } else if (userAnswer2) {
        wrong.push(userAnswer2);
    }
    var userAnswer3 = $('input[name=optradio3]:checked').val();
    if (userAnswer3 === "Blitzkrieg") {
        right.push(userAnswer3);
    } else if (userAnswer3) {
        wrong.push(userAnswer3);
    }
    var userAnswer4 = $('input[name=optradio4]:checked').val();
    if (userAnswer4 === "St. Nicholas") {
        right.push(userAnswer4);
    } else if (userAnswer4) {
        wrong.push(userAnswer4);
    }
    var userAnswer5 = $('input[name=optradio5]:checked').val();
    if (userAnswer5 === "American flag") {
        right.push(userAnswer5);
    } else if (userAnswer5) {
        wrong.push(userAnswer5);
    }
    var userAnswer6 = $('input[name=optradio6]:checked').val();
    if (userAnswer6 === "Squeaky Fromme") {
        right.push(userAnswer6);
    } else if (userAnswer6) {
        wrong.push(userAnswer6);
    }
    var userAnswer7 = $('input[name=optradio7]:checked').val();
    if (userAnswer7 === "Franklin D. Roosevelt") {
        right.push(userAnswer7);
    } else if (userAnswer7) {
        wrong.push(userAnswer7);
    }
    var userAnswer8 = $('input[name=optradio8]:checked').val();
    if (userAnswer8 === "Tim Berners-Lee") {
        right.push(userAnswer8);
    } else if (userAnswer8) {
        wrong.push(userAnswer8);
    }
    var userAnswer9 = $('input[name=optradio9]:checked').val();
    if (userAnswer9 === "3") {
        right.push(userAnswer9);
    } else if (userAnswer9) {
        wrong.push(userAnswer9);
    }
    var userAnswer10 = $('input[name=optradio10]:checked').val();
    if (userAnswer10 === "Tommy Lee Jones") {
        right.push(userAnswer10);
    } else if (userAnswer10) {
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

    document.getElementById("correct").innerHTML = "<h5>Correct Answers: " + totalRight + "</h5> ";
    document.getElementById("incorrect").innerHTML = "<h5>Incorrect Answers: " + totalWrong + "</h5> ";
    document.getElementById("unanswered").innerHTML = "<h5>Unanswered: " + totalUnanswered + "</h5> ";

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
