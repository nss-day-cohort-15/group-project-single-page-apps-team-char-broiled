
function enter(e) {
  if (13 == e.keyCode) {
    var userInput = document.getElementById("messageArea")
    Chatty.addMessage(Chatty.getNextId(), userInput.value)
  }
}

document.addEventListener("keydown", enter);

