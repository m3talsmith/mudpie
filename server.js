var argv = require('optimist').argv;
var port = argv.port ? argv.port : 8080;

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
  var socket_id     = (new Date).getTime();
  var socket_object = {id: socket_id, socket: socket, info: {address: socket.remoteAddress, port: socket.remotePort}};
  
  console.log(socket_id + ' connected from ' + socket.remoteAddress + ':' + socket.remotePort);

  sockets.push(socket_object);

  socket.on('end', function(){
    socket_index = find_socket_index(socket_id);
    sockets.splice(socket_index, (socket_index + 1));
    console.log(socket_id + ' disconnected');
  });

  socket.write('Connected to MudPie\r\n');
  socket.pipe(socket);

}).listen(port, function(){
  console.log('Let the contest begin! - MudPie ready for connections');
});
