var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');

router.get('/', function (request, response) {
   console.log('Made it to profile creation root route');
   response.render('profileCreation');
});

router.get('/profileCreation', function(request, response){
    console.log('MAde it to profileCreation route');
    response.render('profileCreation');
})

module.exports = router;