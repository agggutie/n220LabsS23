// For the purposes of this exercise, bad words are: clear, water, tires.

// Create an application that:

// Takes input from a user using a simple text input field.
// Splits the string on spaces
// Loops through  the array looking for bad words in the array
// Adds 1 to a tally count when a bad word is found
// Outputs to the document
// If any bad words were found (found / not found)
// How many bad words, in total, were found
// Clears out the text field so the user can input a new string

//references
let text = document.getElementById("text")
let dvOutput = document.getElementById("dvOutput")

function counter(){
let words = text.value;

//split the value of the string into an array
let myArray = words.split(" ")

//init tally
let tally = 0

//for loop where the array created adds a tally for each "bad" word found
for(let i = 0; i < myArray.length; i++){
    if(myArray[i] == "clear"){
        tally += Number(1)
        dvOutput.innerHTML = tally
    } else if(myArray[i] == "water"){
        tally += Number(1)
        dvOutput.innerHTML = tally
    } else if(myArray[i] == "tires"){
        tally += Number(1)
        dvOutput.innerHTML = tally
    }
}

text.value = ""
}
