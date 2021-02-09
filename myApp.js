var express = require('express');
var app = express();
app.get("/json", (req, res) => { let message = "Hello json";
(process.env.MESSAGE_STYLE == "uppercase") ? message=message.toUpperCase() : message=message; 
 res.json({"message": message}); 
 });



































 module.exports = app;
