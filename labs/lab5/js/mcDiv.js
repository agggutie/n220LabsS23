const boxes = {posX:360, posY:360, r: 150, red: "#FF0000", blue: "#0000FF"}

const eyebrows = {posY:200, w: 160, h:80} 


function drawBoxes(position){

    fill(boxes.blue)

    circle(position, boxes.posY, boxes.r)

}

function drawEyebrows(positions){
    fill(boxes.red)

    rect(positions, eyebrows.posY, eyebrows.w, eyebrows.h)
}

function setup(){
    createCanvas(800, 800)


}

function draw(){
    frameRate(10)
    background(random(30,50))

    drawEyebrows(440)

    drawEyebrows(250)
    drawBoxes(344)
    drawBoxes(500)

}