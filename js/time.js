let mouse = document.getElementById("mouse")

console.log(mouse)
mouse.style.width = 100 + "px"
mouse.style.height = 100 + "px"
mouse.style.backgroundColor = "red"

function changeColor(){
    mouse.style.backgroundColor = "blue"
}

function changeColorHover(){
    mouse.style.backgroundColor = "black"
}