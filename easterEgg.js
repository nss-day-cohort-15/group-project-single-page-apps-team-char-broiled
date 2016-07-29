// This module contains the logic to access
// the super top-secret easter egg contained
// in our kick ass web application.

var Chatty = (function easterEggModule(chatty = {}) {
  var textBox = document.getElementById('chatBox');

  function activateEasterEgg() {
    textBox.classList += ' scott-mode';
  }

  chatty.detectEasterEgg = function detectEasterEgg(msgObj) {
    if (msgObj.message === 'scott mode') {
      activateEasterEgg();
      msgObj.message = 'Teach me how to program like u senpai 💯';
      msgObj.user = 'Scott';
      msgObj.message += `<img src="http://cultofthepartyparrot.com/parrots/shuffleparrot.gif">`;
    }

    return msgObj;
  };

  return chatty;
})(Chatty);
