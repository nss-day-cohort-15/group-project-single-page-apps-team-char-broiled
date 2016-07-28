
function enter(e) {
  if (13 == e.keyCode) {
    var userInput = document.getElementById("messageArea");
    var selectedUser = document.querySelector("input[name='user']:checked").value;
    var message = {
      user: selectedUser,
      message: userInput.value
    };
    Chatty.addMessage(message.message);
    Chatty.addMessageToDom(Chatty.getNextId(), message);
    userInput.value = '';
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

function clearBox(chatBox)
{
    document.getElementById(chatBox).innerHTML = "";
}


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

