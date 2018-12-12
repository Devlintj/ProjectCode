var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');

router.get('/', function(request, response){
    response.render('proff');

})


router.post('/professor', function(request, response){
    console.log("made it to the post request");
    response.redirect('/login');
})




module.exports = router;