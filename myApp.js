var express = require('express');
var app = express();

console.log("Hello World");

/*app.get("/", (req, res) => {
  res.send('Hello Express');
});*/

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

app.use(express.static(__dirname + "/public"));

/*app.get("/json", (req, res) => {
    res.json({"message": "Hello json"})
});*/

var responsejson = "Hello json"
if (process.env.MESSAGE_STYLE==='allCaps'){
responsejson = responsejson.toUpperCase};

app.get("/json", (req, res) => {
    res.json({"message": responsejson})
});



























 module.exports = app;