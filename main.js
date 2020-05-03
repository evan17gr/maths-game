var hasStarted = false;
var keepPlaying = true;
var firstAnswerPressed = false;
var secondAnswerPressed = false;            
var thirdAnswerPressed = false;
var fourthAnswerPressed = false;

function playGame (){
    
    if(hasStarted == true){
        //restart the game
        window.location.reload(true);
    }

    else{
        //all variables
        var score = 0;
        var randomNumber =  Math.floor(Math.random() * 10);
        var secondRandomNumber =  Math.floor(Math.random() * 10)
        var answer = randomNumber*secondRandomNumber;
        var firstWrongAnswer =  Math.floor(Math.random() * 100)
        var secondWrongAnswer =  Math.floor(Math.random() * 100)
        var thirdWrongAnswer =  Math.floor(Math.random() * 100)

        //start the game
        document.getElementById("startreset").innerHTML= "Reset Game";
        document.getElementById("timeremaining").style.display = "inline"
        document.getElementById("timeremaining").style.visibility= "visible";
        hasStarted = true;
        
        while(keepPlaying){
            //create a question
            document.getElementById("question").innerHTML = randomNumber+ "X" + secondRandomNumber;

            //create wrong answers
            var answers =  [answer,firstWrongAnswer,secondWrongAnswer,thirdWrongAnswer];

            //randomise the array
            for(let i = answers.length -1; i > 0; i--){
                const j = Math.floor(Math.random() * i)
                const temp = answers[i]
                answers[i] = answers[j]
                answers[j] = temp
            }

            //show random answers 
            var firstAnswer = document.getElementById("box1").innerHTML = answers[0];
            var secondAnswer = document.getElementById("box2").innerHTML = answers[1];
            var thirdAnswer = document.getElementById("box3").innerHTML = answers[2];
            var fourthAnswer = document.getElementById("box4").innerHTML = answers[3];

            //create the timer
            var timeremaining = 60;
            function startCountdown (){
            var action = setInterval(function(){
                    timeremaining -=1;
                    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
                    if(timeremaining == 0){
                        clearInterval(action);
                        document.getElementById("gameOver").style.display = "inline";
                        document.getElementById("gameOver").innerHTML = "Game over - Score: " +score;
                    }
            },1000);
            
            }

            //see which answer has been pressed
            document.getElementById("box1").onclick = function(){
                firstAnswerPressed = true;
                if(firstAnswerPressed == true && firstAnswer == answer){
                    score++;
                    console.log(score);
                    document.getElementById("correct").style.display = "inline";
                    updateScore();
                }
                else if (firstAnswerPressed == true){
                    document.getElementById("wrong").style.display = "inline";
                }
            };
            document.getElementById("box2").onclick = function(){
                secondAnswerPressed = true
                if(secondAnswerPressed == true && secondAnswer == answer){
                    score++;
                    console.log(score);
                    document.getElementById("correct").style.display = "inline";
                    updateScore();
                }
                else if (secondAnswerPressed == true){
                    document.getElementById("wrong").style.display = "inline";
                }
            };
            document.getElementById("box3").onclick = function(){
                thirdAnswerPressed = true
                if(thirdAnswerPressed == true && thirdAnswer == answer){
                    score++;
                    console.log(score);
                    document.getElementById("correct").style.display = "inline";
                    updateScore();
                }
                else if (thirdAnswerPressed == true){
                    document.getElementById("wrong").style.display = "inline";
                }
            };
            document.getElementById("box4").onclick = function(){
                fourthAnswerPressed = true
                if(fourthAnswerPressed == true && fourthAnswer == answer){
                    score++;
                    console.log(score);
                    document.getElementById("correct").style.display = "inline";
                    updateScore();
                }
                else if (fourthAnswerPressed == true){
                    document.getElementById("wrong").style.display = "inline";
                }
            };
        }
        //update the score
        function updateScore(){
            document.getElementById("scorevalue").innerHTML = score;
        }

        startCountdown();
        keepPlaying = false;

    }
}


