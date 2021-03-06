// note, io.listen() will create a http server for you
var io = require('socket.io').listen(1337);

io.sockets.on('connection', function (socket) {
  io.sockets.emit('this', { will: 'be received by everyone'});

  socket.on('new message', function (from) {
    console.log('I received a private message by ', from, ' saying ');
	io.sockets.emit('refresh', { will: 'be received by everyone'});
  });

  socket.on('disconnect', function () {
    io.sockets.emit('user disconnected');
  });
});