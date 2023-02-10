const ball = {xPos:-10, yPos:400, r:90, color:"#ff0000"};


function setup(){
    createCanvas(800, 800)


}

function draw(){
    background(0)

    fill(ball.color)

    circle(ball.xPos, ball.yPos, ball.r)

    if(ball.xPos > 830){
        ball.xPos = -30
    }
    else{
        ball.xPos+=5
    }
    
}
