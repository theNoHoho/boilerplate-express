var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.sendFile(/views/index.html);
  });


































 module.exports = app;
 console.log("Hello World");