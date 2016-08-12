var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    var object = url.parse(request.url, true);
    var d;
    
    if (object.pathname === '/api/parsetime') {
        d = new Date(object.query.iso);
        response.end(JSON.stringify({
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds()
        }));
    }
    else if (object.pathname === '/api/unixtime') {
        d = new Date(object.query.iso);
        response.end(JSON.stringify({
            unixtime: d.getTime()
        }));
        
    } 
    else {
        response.writeHead(404);
        response.end();
    };
});

server.listen(process.argv[2]);