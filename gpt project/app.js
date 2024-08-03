async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const response = await fetch('/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userInput })
    });
    const data = await response.json();
    displayMessage(userInput, 'user');
    displayMessage(data.answer, 'bot');
    document.getElementById('user-input').value = '';
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}
