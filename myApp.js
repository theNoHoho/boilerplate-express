var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });


































 module.exports = app;
 console.log("Hello World");