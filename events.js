
function enter(e) {
  if (13 == e.keyCode) {
    var userInput = document.getElementById("messageArea")
    Chatty.addMessage(userInput.value)
    Chatty.addMessageToDom(Chatty.getNextId(), userInput.value)
    userInput.value = ''
    clearButton.removeAttribute("disabled")
  }
}

document.addEventListener("keydown", enter);

/*Checkbox Color Changes*/

// $(function(){
//     $('input[type="checkbox"]').click(function(){
//         if(this.checked)
//             $(this).closest('body').addClass('dark');
//         else
//             $(this).closest('body').removeClass('dark');
//     });
// });​

// function clearBox(chatBox)
// {
//     document.getElementById(chatBox).innerHTML = "";
// }

clearButton.addEventListener("click", function() {
    chatBox.innerHTML = "";
    clearButton.setAttribute("disabled", true);
});

var colorChange = document.getElementsByClassName("light")

function themeColor() {
  if (document.getElementById("theme").checked){
    for (var i = 0; i < colorChange.length; i++){
      colorChange[i].classList.toggle("dark")
    }
  }
  else{
    for (var i = 0; i < colorChange.length; i++){
      colorChange[i].classList.toggle("dark")
  }
}};

document.getElementById("theme").addEventListener("click", themeColor);

/*Text Change*/


function textSize() {
var textChange = document.getElementsByClassName("textToggle")
  if (document.getElementById("size").checked){
    for (var i = 0; i < textChange.length; i++){
      textChange[i].style.fontSize = '30px';
    }
  }
  else{
    for (var i = 0; i < textChange.length; i++){
      textChange[i].style.fontSize = '14px';
  }
}};

document.getElementById("size").addEventListener("click", textSize);

