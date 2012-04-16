var sockets           = [];
var find_socket_index = function(socket_id) {
  socket_index = null;
  for(i=0; i <= sockets.length - 1; i++){
    if(sockets[i]['id'] == socket_id){
      socket_index = i;
      break;
    }
  }
  return socket_index;
};

var net = require('net');

net.createServer(function(socket){
  var socket_id = (new Date).getTime();
  sockets.push({id: socket_id, socket: socket});

  socket.on('end', function(){
    socket_index = find_socket_index(socket_id);
    sockets.splice(socket_index, (socket_index + 1));
  });
}).listen('3000', function(){
  console.log('Server started');
});
