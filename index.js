console.log('server is starting')

var express = require('express');
const mongoose = require('mongoose')
var app = express();
const { startDatabase, stopDatabase, isConnected } = require('./db');
const server = app.listen(3000)

require('dotenv').config()

function listening(){
    console.log('listening.....');
}

process.on('SIGINT', async () => {
    await stopDatabase();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    await stopDatabase();
    process.exit(0);
  });


if(require.main === module){
    app.get('/',(req,res)=>{
        res.json({message: 'o_O',
    database: isConnected() ? 'connected' : 'disconnected'})})
}
