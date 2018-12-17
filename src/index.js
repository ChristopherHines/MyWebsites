var express = require('express');

// Constants
var PORT = 4900;

// App
var app = express();
app.get('/', function (req, res) {
- res.sendFile('/src/index.html');
});

path = __dirname+'/dist'
app.use(express.static(path));

app.get('/playground', function(req, res){
   res.sendfile('/src/dist/index.html')
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
