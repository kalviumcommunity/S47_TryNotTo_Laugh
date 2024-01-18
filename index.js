console.log('server is starting')

var express = require('express')
var app = express();

var server = app.listen(3000,listening)

function listening(){
    console.log('listening.....');
}
if(require.main === module){
    app.get('/',(req,res)=>{
        res.send('hi')
    })
}


// app.use(express.static('website'));
