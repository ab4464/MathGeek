//DIVISION-PROBABILITY
function division() {
    var a = document.querySelector('#numerator').value;
    var b = document.querySelector('#denominator').value;
    var result = a / b;
    document.getElementById('probability').value = result.toFixed(3);
    var result = result * 100;
    document.getElementById('printPercentage').innerHTML = result.toFixed(3) + "%";
}

function resetDivision() {
    document.getElementById('numerator').value = "";
    document.getElementById('denominator').value = "";
    document.getElementById('probability').value = "";
    document.getElementById('printPercentage').innerHTML = "";
}

// FACTORIAL, PERMUTATION & COMBINATION 

function getFactorialWithDisplay() {
    document.getElementById('printResult').innerHTML = getFactorial(document.getElementById('userInput').value);
}

function getFactorial(num) {
    var result = 1;
    for (var i = num; i > 0; i--) {
        result = result * i;
    }
    return result;
}



function getPermutation() {
    var num = document.querySelector('#n').value;
    var k = document.querySelector('#k').value;
    var result = getFactorial(num);
    var result = result / getFactorial(num - k);

    document.getElementById('calculResult').value = result;
}

function getCombination() {
    var num = document.querySelector('#n').value;
    var k = document.querySelector('#k').value;

    var result = getFactorial(num);
    var result = result / (getFactorial(k) * getFactorial(num - k));
    document.getElementById('calculResult').value = result;
}

function clearField() {
    document.getElementById('calculResult').value = "";
    document.getElementById('n').value= "";
    document.getElementById('k').value= "";
}


//EXERCISES

var exercises = [
    {
        question: "How many unique ways are there to arrange the letters in the word SONG?",
        result: 24
        },
    {
        question: "How many unique ways are there to arrange the letters in the word TIGER?",
        result: 120
        },
    {
        question: "How many unique ways are there to arrange the letters in the word SASSY?",
        result: 20
        },
    {
        question: "You have 2 extra tickets to go to the movies but 5 friends who wants to come along. How many different groups of friends could you take with you?",
        result: 10
        },
    {
        question: "How many ways can we award a 1st, 2nd and 3rd place prize among 8 contestants?",
        result: 366
        },
    {
        question: "How many combinations could you make when choosing 3 desserts from a menu of 10",
        result: 120
        }];

var questionPointer = 0;
var correctAnswers = 0;
var correctAnswerMap = [];
var setupPage = "";

function pageSetup() {
    var startQuiz = exercises[0].question;
    document.getElementById('practice').innerHTML = startQuiz;
    setupPage = document.getElementById('quizSetup').innerHTML;
}

function restartPage() {
    document.getElementById('quizSetup').innerHTML = setupPage;
}



function nextQuestion() {
    var yourResult = document.getElementById('quiz-answer');

    if (questionPointer < exercises.length - 1) {

        // check the item result
        if (exercises[questionPointer].result == yourResult.value) {
            correctAnswers++;

        } else {
            correctAnswerMap.push({
                Question: exercises[questionPointer].question,
                Result: exercises[questionPointer].result,
                Answer: yourResult.value
            })
        }

        questionPointer++;

        document.getElementById('practice').innerHTML = exercises[questionPointer].question;

    } else {
        var resutlMsg = 'You have ' + correctAnswers + ' Correct Answers ' + (exercises.length - correctAnswers) + ' Incorrect ones <hr>';

        // If incorrect answers, display:
        if (correctAnswers != exercises.length) {
            resutlMsg += 'THE FOLLOWING QUESTIONS WERE ANSWERED WRONG: <br>';

            for (var counter = 0; counter < correctAnswerMap.length; counter++) {
                resutlMsg += '<b>Question:</b> ' + correctAnswerMap[counter].Question + '<br>';
                resutlMsg += '<i>Correct Answer:</i> ' + correctAnswerMap[counter].Result + '<br>';

                if (correctAnswerMap[counter].Answer == "") {
                    resutlMsg += '<b>Your Answer:</b> Not answered <hr>';
                } else {
                    resutlMsg += '<b>Your Answer:</b> ' + correctAnswerMap[counter].Answer + '<hr>';
                }
            }
        }

        resutlMsg += "<button onclick='restartPage();'> Restart </button>";
        document.getElementById('quizSetup').innerHTML = resutlMsg;
        questionPointer = 0;
    }

    yourResult.value = '';
}