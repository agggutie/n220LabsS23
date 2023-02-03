// This is more about debugging the code since the code is laid out for us. As well as understanding how we can use the math functions to return a value that can be used for other purposes such as creating a vector or an object. Create the function and give it location data and an argument . 
// in addition to your setup() and draw() calls, add a new function named polarPoint()
// Add one argument to polar point (r)
// In the polar point function, create an x variable and set it to r * Math.sin(mouseX);
// Create a Y variable, set it to the result of r * Math.cos(mouseX);
// Finally, at the end of the function, write return createVector(x,y); 
// To test this function:

// Set a variable (perhaps res) equal to the result of calling polarPoint() in your draw call
// Add a translate(100,100); line before your drawing methods
// Draw a circle at res.x, res.y, and with a radius of 10.
// (res is technically an 'object', which we will learn more about next week)



function polarPoint(r){
    x = r * Math.sin(mouseX)
    y = r + Math.cos(mouseX)

    return createVector(x,y)

}

function setup(){
    createCanvas(800, 800)
    background(200)
}

function draw(){
    
    let res = polarPoint()

    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    translate(100,100)
    circle(res.x,res.y,10)
    
    
    


   

}
