function composition(){
    
    w = 40

    h = 40

    fill("#ff0000")
    rect(mouseX, mouseY, w, h)

    fill("#0000ff")
    rect(mouseY, mouseX, w, h)
}

function setup(){
    createCanvas(800, 800)

}

function draw(){
    background(220)

    composition()
}