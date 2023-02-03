// Create a composition of of a star and store it in a function. That function must be able to be changed with each call. I am not sure how to have each composition return the value but I am thinking x += 100 , y += 100 or random to give me different x and y locations in the draw function so it has different values in each call. 

// I can actually just pass those values in manually when calling the functiion. Shoutout to getting started with p5.js

function composition(posX, posY){
    fill(100,50,200)

    circle(posX +25,posY,230)
    fill(20,0,50)
    circle(posX + 20 , posY + 40, 60)

    
    triangle(posX, posY, posX+=28, posY-=55, posX+=28, posY+=55)

    triangle(posX, posY, posX+=28, posY-=55, posX+=28, posY+=55)
}

function setup(){
    createCanvas(800, 800)
    

}

function draw(){
    background(0,0, random(40,50))

    composition(mouseX,mouseY)
    composition(200, 300)
    composition(500, 500)

    
}