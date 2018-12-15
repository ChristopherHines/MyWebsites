var express = require('express');

// Constants
var PORT = 4900;

// App
var app = express();
app.get('/', function (req, res) {
- res.sendFile('/src/index.html');
});

app.get('/playground', function (req, res) {
- res.sendFile('/src/dist');
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
