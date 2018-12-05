var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var expressValidator = require('express-validator');
app.use(expressValidator());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var methodOverride = require('method-override');
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method
    }
}));

var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser('csci3308'));
app.use(session({
    secret: 'csci3308',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.use(flash());

var router = express.Router();

// //code to allow python calls
// var myPythonScriptPath = 'dbHandler.py'
// //import {PythonShell}
// // Use python shell
// let {PythonShell} = require('python-shell');
// var pyshell = new PythonShell(myPythonScriptPath);
//
// pyshell.on('message', function (message) {
//     // received a message sent from the Python script (a simple "print" statement)
//     console.log(message);
// });
//
// // end the input stream and allow the process to exit
// pyshell.end(function (err) {
//     if (err){
//         throw err;
//     };
//
//     console.log('finished');
// });



var login = require('./routes/login');
var success =  require('./routes/success');
var profileCreation = require('./routes/profileCreation');

app.use('/', login);
app.use(express.static('public'));
app.use('/login', login);
app.use('/success', success);
app.use('/profileCreation', profileCreation);



//error handling
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) =>{
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


var port = 4000;
app.listen(port, function () {
    console.log('Server running on http://localhost:' + port)
});
