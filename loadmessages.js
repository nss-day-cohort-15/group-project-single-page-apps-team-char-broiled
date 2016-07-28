var Chatty = (function messageModule(chatty = {}) {
  messages = [];

  chatty.getSavedMessages = function getMessages(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'messages.json');
    xhr.addEventListener('load', function onLoad() {
      messages = JSON.parse(xhr.responseText);
      console.info('Success: Loaded messages from messages.json.');
      callback(messages);
    });
    xhr.send();
  }

  return chatty;
})(Chatty);
