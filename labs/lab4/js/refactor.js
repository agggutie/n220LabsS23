let circleP = {
    xPos: 0,
    yPos: 400,
    c: (200,22,22)
}


function setup(){
    createCanvas(800, 800)


}

function draw(){
    background(0)

    fill(c)
    circle(circleP.xPos, circleP.yPos, 90)

    xPos += 5

    if(xPos > 800){
        xPos = 0
    }
}