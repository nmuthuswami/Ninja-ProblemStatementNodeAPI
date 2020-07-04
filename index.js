const express = require('express');
const api = require('./api/api');
const bodyParser = require('body-parser');

var server = new express();
var port = process.env.port || 3000;

server.use(bodyParser.json());

server.get('/',(req,res)=>{
    res.send('Hi this is my first node js deployment in azure.');
});

server.get('/api/getDirDetails',(req,res)=>{
    api.getDirectoryDetails(req,res);
});

server.get('/api/getFileContents/:fName',(req,res)=>{
    api.getFileContents("C:\\Nirmal\\My Learnings\\ninja\\Source_Files" + "\\" + req.params.fName, res);
});

server.listen(port,()=>{
    console.log('Port listening to server 3000');
})