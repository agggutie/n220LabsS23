function setup(){
    createCanvas(800,800)
    background(135, 64, 207)
    fill("red")
    circle(50,50,30)
}

function draw(){
    noStroke()
    circle(mouseX, mouseY, 30)
}