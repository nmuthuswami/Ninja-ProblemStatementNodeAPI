const express = require('express');
const api = require('./api/api');
const bodyParser = require('body-parser');

var server = new express();

server.use(bodyParser.json());

server.get('/',(req,res)=>{
    res.send('Hi Jeeya');
});

server.get('/api/getDirDetails',(req,res)=>{
    api.getDirectoryDetails(req,res);
});

server.get('/api/getFileContents/:fName',(req,res)=>{
    api.getFileContents("C:\\Nirmal\\My Learnings\\ninja\\Source_Files" + "\\" + req.params.fName, res);
});

server.listen(3000,()=>{
    console.log('Port listening to server 3000');
})