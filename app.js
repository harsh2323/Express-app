var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var PORT = 3000;

app.use(express.static(__dirname + '/bower_components'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/user-profile/:name?', (req, res) => {
    var name = req.params.name;
    res.send(`UserName is ${name}`);
})

app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
})