// get element
let loop = document.getElementById("loop");


let numbers = [1000,2000,3000,4000,5000]

// Write a for-loop that displays the length of the array to the div with one line of code 



for ( i = 0; i < numbers.length; i++ ) {
    let itemAtIndex = numbers[i] + "   "
    loop.innerHTML += itemAtIndex;
}

// create the array 

// initialize loop - i  < array.length - i++

// print the array to the div