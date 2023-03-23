let userName = document.getElementById("userName")

let dvResult = document.getElementById("dv")

function input(){
    console.log("Hi" + " " + userName.value + "!")
    dvResult.innerHTML = "Hi" + " " + userName.value + "!"
}