const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http');

app.use(bodyParser.json())

var server = http.createServer(app);

app.get('/',function(req,res){
    res.json({
        message:"Hello,world"
    });
});

server.listen(3000);