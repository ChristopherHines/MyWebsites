var express = require('express');
var PORT = 80;

var app = express();

path = __dirname+'/dist';
app.use(express.static(path));

app.get('/', function (req, res) {
- res.sendFile('dist/index.html');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);