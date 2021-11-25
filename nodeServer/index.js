// Node Server which will handle socket io connections.

// const io = require('socket.io')(8000);
const io = require('socket.io')(8000, {
    cors: {
      origin: '*',
    }
  });

const users = {};

io.on('connection', socket =>{
    // If any new user joins, let other users inform which are connected to server. 
    socket.on('new-user-joined', name =>{
        // console.log("New user", name)
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    // If someone sends a message, broadcast to all other users.
    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });

    // If someone leaves the chat, let othe users inform.
    socket.on('disconnect', message=>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users [socket.id];
    });
})