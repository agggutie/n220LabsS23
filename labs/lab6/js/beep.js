let math = document.getElementById("math")

math.style.width = 300 + "px"
math.style.height = 200 + "px" 

// Math.ceil() but where
// Create a for loop that runs 25 times
for(i = 0; i < 25; i++){
    if (i % 3 == 0){
      math.innerHTML += " beep <br/>"
    }else if(i % 5 == 0){
      math.innerHTML += " bop <br/> "
    }else if(i % 3 == 0 && i % 5 == 0){
      math.innerHTML += "beep" + "bop <br/>"
    }
    else{
      math.innerHTML += i + "<br/>"
    }

}


// Print the result of this loop to a div

// if / 3 print out beep - can be achieved with an if statement in the for loop I believe if /3 = beep elseif /5 bop. Not sure how to print both beep and bop to the div for 15.