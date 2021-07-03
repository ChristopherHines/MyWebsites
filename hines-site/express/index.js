// var express = require('express');
// var PORT = 80;

// var app = express();

// path = __dirname+'/dist';
// app.use(express.static(path));

// app.get('/', function (req, res) {
// - res.sendFile('dist/index.html');
// });

// app.listen(PORT);

// console.log('Running on http://localhost:' + PORT);

var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express');

var port = 80;

var options = {
    key: fs.readFileSync('./10275765_http192.168.1.28.key'),
    cert: fs.readFileSync('./10275765_http192.168.1.28.cert'),
};

var app = express();

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

app.get('/', function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
});