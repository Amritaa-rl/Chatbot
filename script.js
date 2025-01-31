function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;

    if (userMessage.trim() !== '') {
        displayUserMessage(userMessage);
        getBotResponse(userMessage);
    }
}

function displayUserMessage(message) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', 'user-message');
    messageElement.innerHTML = `<span>${message}</span>`;
    chatBox.appendChild(messageElement);
    document.getElementById('userMessage').value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    const chatBox = document.getElementById('chatBox');
    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message', 'bot-message');
    
    // Bot typing effect
    botMessage.innerHTML = '<span>...</span>';
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate a delay for typing effect
    setTimeout(() => {
        botMessage.innerHTML = `<span>${generateBotResponse(userMessage)}</span>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1500);
}

function generateBotResponse(userMessage) {
    let response = '';

    // Convert the user message to lowercase for easier comparison
    const message = userMessage.toLowerCase();

    // Basic keyword-based responses
    if (message.includes('hello') || message.includes('hi')) {
        response = 'Hello! How can I assist you today? 😊';
    } else if (message.includes('bye')) {
        response = 'Goodbye! Have a wonderful day! 🌼';
    } else if (message.includes('how are you')) {
        response = 'I\'m doing great, thank you for asking! How about you? 😊';
    } else if (message.includes('love')) {
        response = 'I love you too! 😘';
    } else if (message.includes('weather')) {
        response = 'I\'m not sure about the weather, but I hope it\'s sunny where you are! 🌞';
    } else if (message.includes('your name')) {
        response = 'I\'m your friendly chatbot! You can call me Chatbot. 😄';
    } else if (message.includes('joke')) {
        response = 'Why don’t skeletons fight each other? They don’t have the guts! 😂';
    } else if (message.includes('help')) {
        response = 'I\'m here to help you! You can ask me about the weather, my name, or just chat with me! 😊';
    } else if (message.includes('what is your purpose')) {
        response = 'My purpose is to assist you with information, share jokes, and chat with you! 😊';
    } else if (message.includes('favorite color')) {
        response = 'My favorite color is blue! 💙 How about you?';
    } else if (message.includes('time')) {
        const currentTime = new Date();
        response = `The current time is: ${currentTime.getHours()}:${currentTime.getMinutes()}`;
    } else if (message.includes('news')) {
        response = 'I don\'t have the latest news, but you can always check out your favorite news site! 📰';
    } else if (message.includes('sad')) {
        response = 'Can I know what is bothering you ??, I will be free to help you';
    } else if (message.includes('happy')) {
        response = 'Wow! I am happy to hear that you are happy.. ';
    } else if (message.includes('hungry')) {
        response = 'Order some yummy food';
    } else if (message.includes('day')) {
        response = 'You are going to have an awesome and amazing day, Just take a deep breath and move on';
    } else if (message.includes('thank you')) {
        response = 'Your Welcome! I am always happy to help you in need';
    } else if (message.includes('radha')) {
        response ='Radhe Radhe, That is really beautiful... Being a devotee of Radha Krishna is a blessing in present world';
    } else if (message.includes('krishna')) {
        response ='Thinking about krishna is one of the best thing anyone can do as a human.. The Mahamantra of Lord Krishna is: Hares Krishna Hare krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare.. Chanting this Mahamantra for 18times through japa mala, Gets you closer to god ';
    } else {
        // Default response for unknown queries
        response = 'I\'m sorry, I didn\'t quite get that. Can you try again? 🤔';
    }

    return response;
}

function toggleEmojiPicker() {
    document.getElementById('emoji-picker').classList.toggle('show');
}

function addEmoji(emoji) {
    const inputField = document.getElementById('userMessage');
    inputField.value += emoji;
    toggleEmojiPicker(); // Close the emoji picker once an emoji is added
}
