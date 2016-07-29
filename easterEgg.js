// This module contains the logic to access
// the super top-secret easter egg contained
// in our kick ass web application.

var Chatty = (function easterEggModule(chatty = {}) {
  function activateEasterEgg() {
    var textBox = document.querySelector('.chatBox');
    textBox.classList += 'scott-mode';
  }

  chatty.detectEasterEgg = function detectEasterEgg(message) {
    if (message.toLowerCase() === 'scott mode') {
      activateEasterEgg();
    }
  };

  return chatty;
})(Chatty);
