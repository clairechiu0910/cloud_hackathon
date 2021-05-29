var aws = require('aws-sdk'),
    winston = require('winston'),
    http = require('http'),
    url = require('url'),
    nStatic = require('node-static');

var awsRegion = 'us-east-1',
    snsTopicARN = "123",
    ddbTableName = "123",
    logfile = 'server.log';

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({ filename: logfile })
    ]
});

var fileServer = new nStatic.Server('./f');

http.createServer(function (request, response) {
    if (request.method == 'POST') {
        console.log("Request POST");

        request.on('data', function (data) {
            var request_data = JSON.parse(data.toString());
            console.log("Receive order data:");
            console.log(request_data);
        });
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("success");
        response.end();        
    }
    else if (request.method == 'GET') {
        var pathname = url.parse(request.url).pathname;
        console.log("Request GET for [" + pathname + "] received.");

        fileServer.serve(request, response);
    }
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/index.html');
