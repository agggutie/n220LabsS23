// Takes in a list of comma-separated numbers from the user
// Splits that list into an array of numbers
// Converts the string version of the numbers into number versions
// Loops through the array and sums up the values
// Calculates the average of the array
// Displays to the user
// The average
// The sum
// Removes the text from the input so the user can type in new numbers

let dvSum = document.getElementById("dvSum")
let dvAverage = document.getElementById("dvAverage")

let text = document.getElementById("text")

function split(){
    let numbers = text.value;

    let myArray = numbers.split(",")

    //reduce sum
    let sum = 0

    for(let i = 0; i < myArray.length; i++){
        sum += Number(myArray[i])
        
        let average = sum / myArray.length

        dvAverage.innerHTML = "The average is " + average + "."

        dvSum.innerHTML = "The sum is " + sum + "."
    }

    text.value = ""
}