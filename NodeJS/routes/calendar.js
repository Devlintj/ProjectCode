//Calendar route
var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');

router.get('/', function (request, response) {
   // redirect from root route to /login route
   console.log("made it to calendar root get route");
   //idea make an array of dates that have assignments on them
   response.render('index');

});

module.exports = router;
