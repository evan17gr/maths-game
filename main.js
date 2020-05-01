var hasStarted = false;
var score = 0;
var randomNumber =  Math.floor(Math.random() * 10);
var secondRandomNumber =  Math.floor(Math.random() * 10)
var answer = randomNumber*secondRandomNumber;

function playGame (){
    
    if(hasStarted == true){
        //restart the game
        window.location.reload(true);
    }

    else{
    

        //start the game
        document.getElementById("startreset").innerHTML= "Reset Game";
        document.getElementById("timeremaining").style.display = "inline"
        document.getElementById("timeremaining").style.visibility= "visible";
        hasStarted = true;
        
        //create a question
        document.getElementById("question").innerHTML = randomNumber+ "X" + secondRandomNumber;


    }
}


