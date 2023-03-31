function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 11);
    document.getElementById("output").innerHTML = "Random number: " + randomNumber;
  }