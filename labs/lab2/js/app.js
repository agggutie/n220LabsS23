// <!-- 
// World Wrap

// need a global variable to hold the circles x pos in memory

// increase this variable by 5 globally

// when the x pos is greater that 800px reset the circle to its original position of 0

// how do I initialize this reset back to 0 in this draw function?

//  -->
let xPos = 0

function setup(){
    createCanvas(800, 800)

    fill(200,22,22)

}

function draw(){
    background(0)
    xPos += 5
    circle(xPos, 400, 90)

    if(xPos > 800){
        xPos = 0
    }
}