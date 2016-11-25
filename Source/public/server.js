/**
 * Created by Nilesh on 25-11-2016.
 */
var http = require('http');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.listen(server_port, server_ip_address, function () {
    console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

function onRequest(request , response){
    console.log("A user made request" + request.url);
    response.writeHead(200,{"Context-type": "text/plain"});
    response.write("Here is some daata");
    response.end();
}
http.createServer(onRequest);

