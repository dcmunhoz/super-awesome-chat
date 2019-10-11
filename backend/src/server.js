require('./config');
const express = require('express');
const router = require('./routes');
const cors = require('cors');

const socket = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3003;

const app = express();
const server = http.Server(app);
const io = socket(server);

const connectedUsers = [];
const messages = [];

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
    
    socket.on("NEW_MESSAGE", data => {

        const to = connectedUsers[data.message.to];

        socket.to(to).emit('RECIVED_MESSAGE', data.message)


    })
    
});



app.use(cors());
app.use(express.json());
app.use(router);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


