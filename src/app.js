const express = require('express');

const app = express();

app.use("/hello", (req,res) => {
    res.send("Hello from the server!");
})

app.use("/Himakar", (req,res) => {
    res.send("Himakar from the server!");
})

app.listen(3333, ()=> {
    console.log("Server is successfully running on port 3333....");
});