const express = require('express');
const connect = require('./config/db');
const app = express();


app.listen(8080,()=>{
    console.log('listening on port 8080');
    connect()
})