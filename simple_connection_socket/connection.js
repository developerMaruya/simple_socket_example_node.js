const express = require('express');
const app = express();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',function(socket){
    console.log("user connected to socket")
    socket.on("add",function(data){
        console.log("add operation leasean from server , req is ",data)
        socket.emit("added",{
            "fist":"2",
            "secound":"3",
            "add":(2+3)
        })
    }
    )
})
http.listen(3000, function(){
    console.log('listening on localhost:3000');
 });