const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
//asking the heroku to find public pport so doesnt need the colons http://sdsakd.com:3000 

app.get("/", (req, resp)=>{
    resp.end("hi, welcome to my heroku app");
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    
    console.log("port is running");
})