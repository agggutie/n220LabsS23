let box = 100

const dvBox = document.querySelector("#dvBox")

dvBox.style.backgroundColor = "green";
dvBox.style.width = box + "px"
dvBox.style.height = box + "px"

function increase(){
    box = box * 1.1
    dvBox.style.width = box + "px"
    dvBox.style.height = box + "px"

}

// stuck here not sure how to reassign the boxW value to = bowW * 1.1







