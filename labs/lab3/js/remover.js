// Create a function that stores the red component. Create a variable to set the red to 0. Apply it in the draw function to a shape.

//

function noRed(r){

    fill(r=0,160,110)

}


function setup(){
    createCanvas(400, 400)
}

function draw(){
    background(200)
    fill(200,0,0)
    circle(30,50,30)
    noRed(0)
    fill(noRed.r,160,110)   
    circle(mouseX,mouseY,30)
}