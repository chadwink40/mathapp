var playing = false;
var score;
var action;
var correctAnswer;
// If we click on the start/reset
document.getElementById('startreset').onclick = function() {
    // If we are playing 
    if (playing == true) {
        location.reload(); //  reload the page

    } else {
        playing = true;
        // if we are not playing 
        // set score to zero
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        // show countdown box
        show('timing')
        timing = 60;

        document.getElementById('timeremaining').innerHTML = timing;

        //hide game over box
        hide('gameOver')

        // change button to reset

        document.getElementById('startreset').innerHTML = 'Reset Game';

        startCountdown();


        // Generate Q & A
        generateQA();
    }

}

for (i = 1; i < 5; i++) {
    document.getElementById('box' + i).onclick = function() {
        if (playing == true) {
            // check if we are playing
            if (this.innerHTML == correctAnswer) {
                // correct answer

                // increase score by 1
                score++;

                document.getElementById('scorevalue').innerHTML = score;

                hide("wrong");
                show("correct");

                setTimeout(function() {
                    hide("correct");

                }, 1000);
                generateQA();

            } else {

                hide("correct");
                show("wrong");

                setTimeout(function() {
                    hide("wrong");

                }, 1000);

            }
        }
    }
}
// start the counter 
function startCountdown() {
    action = setInterval(function() {
        timing -= 1;
        document.getElementById("timeremaining").innerHTML = timing;
        if (timing == 0) {
            // game over 
            stopCountdown();
            show('gameOver')
            document.getElementById("gameOver").innerHTML =
                "<p> Game Over !</p> <p> Your score is " + score + ".</p>";
            hide('timing');
            hide('correct');
            hide('wrong');

            playing = false;

            document.getElementById("startreset").innerHTML = 'Start Game';

        }
    }, 1000);
}
// stop the counter
function stopCountdown() {
    clearInterval(action);
}
// hide  element 
function hide(id) {
    document.getElementById(id).style.display = 'none';
}
// show element 
function show(id) {
    document.getElementById(id).style.display = 'block';
}

function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    // var wrongAnswer =! x*y;

    document.getElementById('question').innerHTML = x + "x" + y;

    var correctPosition = 1 + Math.round(3 * Math.random());

    // fill one box  with right answer 

    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;

    // fill other with wrong answers
    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));



            }
            while (
                answers.indexOf(wrongAnswer) > -1)
            document.getElementById('box' + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer)

        }
    }

}

// if we are not playing 
// set score to zero

// reduce time by 1sec in loops
// time left ?
// Yes -> continue
// no - gameover

// generate nnew Q&A


// if we click on answer box
//  if we are playing 
// correct
// yes
// increase  the score 
// show correct box for 1sec
// generate new Q&A
// no
// Show try again box for 1sec