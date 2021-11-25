
const socket = io('http://localhost:8000');

//Get DOM elements in respective JS variables.
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

// Defined audio here that will play on receiving messages.
var audio = new Audio ('ting.mp3');

// Function which will append event info to the container.
const append = (message,position)=>{

    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight; // to scrolldown automatically when multiple messages sent by users.

    if(position == 'left'){
        audio.play();
        
    }
}

// Ask new user to enter his/her name to join the chat, and let the server know.
const name = prompt("Please enter your name to join");
socket.emit('new-user-joined', name);

// If new user joins, receive his/her name from the server.
socket.on('user-joined',name=>{
    append(`${name} joined the chat`,'right')
})

// If a user leaves the chat, append the info to the container.
socket.on('left',name=>{
    append(`${name} left the chat`,'right')
})

// If server sends a message, receive it.
socket.on('receive',data=>{
    append(`${data.name}: ${data.message}`,'left')
})

// If the form gets submitted, send server the message.
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value= '';
})