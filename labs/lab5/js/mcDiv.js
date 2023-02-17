let mcDiv = document.createElement("div");


function mouseClicked(){
    mcDiv.append("div")
}




mcDiv.style.width = "800px";
mcDiv.style.height = "200px";
mcDiv.style.backgroundColor = "yellow";





document.body.appendChild(mcDiv)

mcDiv.addEventListener('click', mouseClicked)
