var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/bower_components'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(client){
    console.log('Client connected....');
    client.on('join', function(data){
        console.log(data);
    });

    client.on('messages', function(data){
        client.emit('broad', data);
        client.broadcast.emit('broad', data)
        console.log(data)
    });
});

app.get('/user-profile/:name?', (req, res) => {
    var name = req.params.name;
    res.send(`UserName is ${name}`);
})

server.listen(3000);