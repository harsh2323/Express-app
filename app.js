var express = require('express');
var app = express();
var PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/user-profile/:name?', (req, res) => {
    var name = req.params.name;
    res.send(`UserName is ${name}`);
})

app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
})