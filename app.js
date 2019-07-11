'use strict'

var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/bower_components'));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/js", express.static(__dirname + "/js"));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
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

app.get('/calculator', (req, res) => {
    res.sendFile(__dirname + '/pages/calculator.html');
});

app.get('/user-profile/:name?', (req, res) => {
    var name = req.params.name;
    res.send(`UserName is ${name}`);
})

server.listen(3000);