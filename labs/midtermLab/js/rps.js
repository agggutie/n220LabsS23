const playerInput = document.getElementById("player")
const computerResult = document.getElementById("computer")
const roundResult = document.getElementById("result")
const score = document.getElementById("score")

let playerScore = 0

function compLogic(){
    let randNum = 1 + Math.floor(Math.random() * 3)

    if(randNum == 1){
        computerResult.innerText = "Computer:" + " " + "Rock"
    } else if(randNum == 2){
        computerResult.innerText = "Computer:" + " " + "Paper"
    } else if(randNum == 3){
        computerResult.innerText = "Computer:" + " " + "Scissors"
    }
    
}

function guard(){
    playerInput.innerText = "Player:" + " " + "Guard"
    roundResult.innerText = "Result" + " " + "Computer Wins"
    playerScore -= .5
    score.innerText = playerScore 
}

function scissors(){
    playerInput 
}


