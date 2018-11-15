var express = require('express');
var app = express();

app.get('/', function (request, response) {
   // render the views/login.ejs template file
   response.render('login', {title: 'KYLE IS USING NODE JS YEET'})
});



module.exports = app;
