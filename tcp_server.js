var net  = require('net');

function pad(number) {
    return ((number < 10) ? '0' : '') + number;
}

var server = net.createServer(function listener(socket) {
    var date = new Date();
    
    var str = date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-';
    str += pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes());
    str += '\n';
    
    socket.end(str);
});

server.listen(process.argv[2]);