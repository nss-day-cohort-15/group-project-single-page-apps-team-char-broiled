var savedMessages = (function messageMoudle() {
  messages = [];

  return {
    getMessages() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'messages.json');
      xhr.addEventListener('load', function onLoad() {
        messages = JSON.parse(xhr.responseText);
        console.info('Success: Loaded messages from messages.json.');
        return messages;
      });
      xhr.send();
    }
  }
})();
