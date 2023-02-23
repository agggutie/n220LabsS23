let math = document.getElementById("math")

math.style.width = 100 + "px"
math.style.height = 100 + "px"

// Create a for loop that runs 25 times
for(i = 0; i < 25; i++){
    if(i % 3){
        math.innerHTML = "beep"
    }
}


// Print the result of this loop to a div

// if / 3 print out beep - can be achieved with an if statement in the for loop I believe if /3 = beep elseif /5 bop. Not sure how to print both beep and bop to the div for 15.