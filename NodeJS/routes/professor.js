var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');
var day;
var month;
var year;
var usrId;

router.get('/', function(request, response){
    console.log('add event get ');
    day = request.query.day;
    month = request.query.month;
    year = request.query.year;
    usrId = request.query.usrid;
    response.render('professor', {data: {}});

});


router.post('/', function(request, response){
    console.log("made it to the prof post request");
    console.log(request.body);
    // var day = request.query.day;
    // var month = request.query.month;
    // var year = request.query.year;
    // var usrId = request.query.usrid;

    request.assert('TiTle','Title cannot be empty').notEmpty();
    //Just going to assume the user knows the proper courseID
    request.assert('ClassID', 'ClassID cannot be empty').notEmpty();

    var query = 'Insert into events(courseID, dueDate, description) values($1, $2, $3)';
    
    var dayNum = parseInt(day, 10);
    if(dayNum < 10){
        day='0'+day;
    }

    var correctedMonthInt = parseInt(month, 10) + 1;
    correctedMonthStr = correctedMonthInt.toString();
    var date = year + '-' + correctedMonthStr + '-' + day;
    console.log(date);

    var classid = request.sanitize('ClassID');
    classid = parseInt(classid, 10);
    console.log('classid', classid);
    var description = request.sanitize('TiTle');
    description += request.sanitize('Description');
    
    db.none(query, [classid, date, description]).then(function(row){
        console.log("Added event properly");
        response.redirect('/calendar?currentMonth='+month+'&currentYear='+year+'&usrid='+usrId+'&isproff=true');

    }).catch(function(error){
        request.flash('error', 'Add event Failed');
        console.log('error occured while adding event');
        console.log(error);
        response.redirect('/professor?day='+day+'&month='+month+'&year='+year+'&usrid='+usrId+'&isproff=true');
        //response.render('professor');
    })

    // response.redirect('/login');




});




module.exports = router;