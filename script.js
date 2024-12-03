const socket = io();

const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  socket.emit('chat message', message);
  messageInput.value = '';
});

socket.on('chat message', (msg) => {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = msg;
  messageContainer.appendChild(messageDiv);
  messageContainer.scrollTop = messageContainer.scrollHeight;
});