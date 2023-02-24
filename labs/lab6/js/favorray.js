let div = document.getElementById("div")

div.style.width = 300 + "px"
div.style.height = 200 + "px"
div.style.margin = 10 + "px"
div.style.padding = 100 + "px"
div.style.backgroundColor = "lavender"
div.style.fontSize = 16 + "px"

// Create the array with "string" variables 
let favorites = ["Fantasy Animes", "Strategy Card Games", "All my animals", "Nature Hikes", "Tacos"]
// use a for loop to run through 5 iterations 
for(i = 0; i < favorites.length; i++ ){
    div.innerHTML += favorites[i] + "  are my favorite! <br/> <br/>"
}
// Concatenate the array variable with the required string