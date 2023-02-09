let coolThing = document.getElementById("coolThing")

function checkResponse(time) {
    if(time=="morning"){
    coolThing.innerHTML = "That is correct"
    }

    else{
        coolThing.innerHTML = "Guess again"
    }

}