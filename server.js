const express = require("express");
const path = require("path");

//CONSTS
const PORT = 8081;
const HOST = '0.0.0.1';

//APP
const app = express();
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT,HOST);
console.log('Running on http://${HOST}:${PORT}');