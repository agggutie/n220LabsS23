function checkDivisibility() {
  var input = document.getElementById("num").value;
  var isDivisible = isDivisibleBy7(input);

  if (isDivisible) {
    document.getElementById("output").innerHTML = input + " is divisible by 7.";
  } else {
    document.getElementById("output").innerHTML = input + " is not divisible by 7.";
  }
}

function isDivisibleBy7(number) {
  if (number % 7 == 0) {
    return true;
  } else {
    return false;
  }
}