// Modular Code
// 2.
//
// One IIFE should contain a function
// that accepts an element id, and the
// user message, and then add the user's
// message - along with the delete button
// to the specified parent element.
//
// Each message should be stored in a
// private array in this IIFE. This IIFE
// should also expose a function to read
// all messages, and delete a single message.

var Chatty = (function controlsModule(chatty = {}) {
  // Load the saved messages from the JSON file
  var messages;

  chatty.getSavedMessages(load);

  function load(msg) {
    messages = msg.messages;

    // Load the saved messages into the DOM
    for (var i = 0; i < messages.length; i++) {
      chatty.addMessageToDom(i, messages[i]);
    }
  }

  var chatBox = document.querySelector('.chatBox');

  chatty.addMessage = function addMessage(message) {
    // Add message to private array
    messages.push(message);
  };

  chatty.addMessageToDom = function addMessageToDom(id, message) {
    var messageElement = document.createElement('div');
    messageElement.style.margin = '5px';
    messageElement.id = id;

    // Message elements must have an ID; the first index should be 0.
    var elementContent = `
      <p style="display:inline"><span style="font-weight:bold">${moment().format('h:mm:ss')}: ${message.user}:</span> ${message.message}</p>
      <button type="button" onclick="Chatty.removeMessage('${id}')" class="btn btn-danger">
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </button>
      <hr>
    `;

    messageElement.innerHTML = elementContent;

    // Append the new element to the chat box
    chatBox.appendChild(messageElement);
  };

  // Searches for a specific id and deletes that element
  chatty.removeMessage = function removeMessage(id) {
    var message = document.getElementById(id);
    chatBox.removeChild(message);
    messages.splice(id, 1);
  };

  // Magical message reading 🌠
  chatty.readAllMessages = function readAllMessages() {
    var utterances = [];
    var thingsToSpeak = messages;
    thingsToSpeak.forEach(function createUtterances(msg) {
      var utterance = new SpeechSynthesisUtterance(msg.message);
      utterances.push(utterance);
    });

    utterances.forEach(function speakEachMessage(msg) {
      window.speechSynthesis.speak(msg);
    });
  };

  chatty.getNextId = function getNextId() {
    return messages.length - 1;
  };

  chatty.deleteMessages = function removeMessages() {
    messages = [];
  };

  return chatty;
})(Chatty);
