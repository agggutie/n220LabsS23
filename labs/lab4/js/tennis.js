// stored variables
const leftR = {posX: 20, posY: 360, w: 20, h: 40}
const rightR = {posX: 760, posY: 360, w: 20, h: 40}

function setup(){
    createCanvas(800, 800)

}

function draw(){
    background(220)

    rect(leftR.posX, leftR.posY, leftR.w, leftR.h)
    rect(rightR.posX, rightR.posY, rightR.w, rightR.h)
//increase & decrease pos values if arrow key is up or down
    if (keyIsDown(UP_ARROW)){
        rightR.posY += 1
        leftR.posY -= 1
    }

    
    if (keyIsDown(DOWN_ARROW)){
        leftR.posY += 1
        rightR.posY -= 1
    }

}

