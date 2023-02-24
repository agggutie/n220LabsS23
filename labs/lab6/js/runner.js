let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")

// Create an Array with best times in ascending order
let times = [ 22.33, 26.52, 28.51 ]

one.style.backgroundColor = "#FFD700"
two.style.backgroundColor = "#BEC2CB"
three.style.backgroundColor = "#CD7F32"

one.innerHTML += times[0]
two.innerHTML += times[1]
three.innerHTML += times[2]
// Create 3 divs that will print the array variable