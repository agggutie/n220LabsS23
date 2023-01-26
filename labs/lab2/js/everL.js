// <!-- 
// Ever Larger

// Setup the canvas

// Need a global (technically dont) variable for the diamater of the circle

// Need a for loop to increase my initial diamater of 1 by 1 every frame until it reaches 200

// When it reaches 200 I need the diameter variable to be set to 1 (thinking an if-else)


// Draw a circle in the center of the screen

//  -->
let i = 1

 function setup(){
    createCanvas(800, 800)
 }

 function draw(){
    background(230)

    if(i < 200){
      i++
    }else{
      i = 1
    }
    noStroke()

  
    fill(random(220, 225),0,150)
    circle(400,400, i)

  

 }
