let dv = document.getElementById("dv")

function guess(){
    let number = document.getElementById("number").value
    let numberInput = document.getElementById("number")

    if (number <= 11){
        dv.innerHTML = "Too Low!"
    }else if(number == 12){
        dv.innerHTML = "Correct!"
    }else if(number >= 13){
        dv.innerHTML = "Too High!"
    }

    numberInput.value = ""

    console.log(number)
}

