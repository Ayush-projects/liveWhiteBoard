const e = require("express")
const express = require("express")
const app = express()
const ws = require("ws")
const wss = new ws.Server({port: 5000})

wss.on('connection', (client)=>{
    console.log("New client connected");
    

    client.onmessage = function(message)
    {
        let temp = JSON.parse(message.data);
        wss.clients.forEach(i => {
            i.send(JSON.stringify(temp));
        });
    }



})
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/draw.html");
})






app.listen(3000, (err)=>{
    if(err)
    console.log(err)
    else
    console.log("Server is Running");
})