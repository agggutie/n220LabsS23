let r = 0 //global variable for radius
function setup(){
    createCanvas(1800,1000)
    frameRate(60)
}

function draw(){ // random fill for growing circle
    fill(random([0], [255]), random([0], [255]), random([0], [255]))
    circle(mouseX, mouseY, r)

    if(mouseIsPressed){ // increases the radius and stores the value 
        r+=2
    }
    if(r>400){ // size limit
        r=0

    }
}
