//refrence div
let div = document.querySelector("#div")

div.style.width = "100px"
div.style.height = "100px"
div.style.margin = "10px"


// this allows the div to be seen before function calls if I were to remove it no color will appear until the functions are called
let color = div.style.backgroundColor = "blue"

//mouse is over the div / change color to black
 function mouseOver(){
    color = div.style.backgroundColor = "black"
}

//mouse is out of the div / change color to blue
function mouseOut(){
    color = div.style.backgroundColor = "blue"
}



