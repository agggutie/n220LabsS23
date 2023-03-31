function removeHashtags(inputString) {
    return inputString.replace(/#/g, "");
  }

  function showResult() {
    const input = document.getElementById("inputText").value;
    const output = removeHashtags(input);
    document.getElementById("output").innerHTML = output;
  }