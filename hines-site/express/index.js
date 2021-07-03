var fs = require('fs'),
    https = require('https'),
    express = require('express');

var port = 443;

var options = {
    key: fs.readFileSync('./10275765_http192.168.1.28.key'),
    cert: fs.readFileSync('./10275765_http192.168.1.28.cert'),
};

var app = express();

https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

path = __dirname+'/dist';
app.use(express.static(path));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});