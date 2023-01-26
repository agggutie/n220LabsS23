// <!-- 
// Puck Side

// Draw a circle to the canvas, mouseX mouseY, 

// use an if-else statement to test where mouseX is in relation to the canvas 

// console.log(mouseX)

// fill red or blue for the corresponding test

//  -->

function setup(){
    createCanvas(800, 400)
}

function draw(){
    background(250)

    if(mouseX > 400){
        fill(0,0,255)
        circle(mouseX, mouseY, 30)
    } else{
        fill(255,0,0)
        circle(mouseX, mouseY, 30)
    }
}