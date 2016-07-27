
var message = document.getElementById('messageArea').value;
// var clearMessages = document.getElementById('clearButton').addEventListener('click', ____);


var keyPress = function (e) {
    if (e.keyCode == 13  && messageArea == "") {
        console.log("enter something");
    }
}


var enterButton = document.addEventListener('keydown', keyPress);
