const dvBox = document.querySelector("#dvBox")

let boxW = 100 + "px"
let boxH = 100 + "px"
dvBox.style.backgroundColor = "green";
dvBox.style.width = boxW
dvBox.style.height = boxH

function increase(){
    dvBox.style.width = 1.1 * boxW
}



