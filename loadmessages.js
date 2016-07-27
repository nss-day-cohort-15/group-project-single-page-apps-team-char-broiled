var Chatty = (function messageMoudle(chatty = {}) {
  messages = [];

  chatty.getSavedMessages = function getMessages(callbackFunction) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'messages.json');
    xhr.addEventListener('load', function onLoad() {
      messages = JSON.parse(xhr.responseText);
      console.info('Success: Loaded messages from messages.json.');
      callbackFunction(messages);
    });
    xhr.send();
  }

  return chatty;
})(Chatty);
