const express = require('express')
const app = express()
 
const PORT = 4000;

function handleListing() {
    console.log(`listening on : http://localhost:${PORT}`);
}

function handleHome(req, res){
    res.send('hello from home')
}

function handleProfile(req,res){
    res.send("profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListing);