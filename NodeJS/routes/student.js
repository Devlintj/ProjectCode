var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');

router.get('/', function(request, response){
    console.log("made it to student root route");
    console.log(request.query);

    var month = request.query.month;
    console.log(month);
    var year = request.query.year;
    console.log(year);
    var day = request.query.day;
    console.log(day);
    var usrid = request.query.usrid;
    var isproff = request.query.isproff;


    response.render('stud', {
        passedmonth:month, 
        passedyear: year, 
        passedday:day,
        passedusrid:usrid,
        passedisproff: isproff,
    });

});





module.exports = router;