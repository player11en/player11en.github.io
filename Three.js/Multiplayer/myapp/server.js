// Server-side code
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Keep track of connected clients
let clients = {};

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);
  clients[socket.id] = {
    x: 0,
    y: 0,
  };

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
    delete clients[socket.id];
  });

  // // Handle client movement
  // socket.on('movement', (movement) => {
  //   console.log(    clients[socket.id].x );
  //   clients[socket.id].x = movement.x;
  //   clients[socket.id].y = movement.y;
  //   socket.broadcast.emit('movement', movement);
  // });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});