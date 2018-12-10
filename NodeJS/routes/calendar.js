//Calendar route
var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');

router.get('/', function (request, response) {
   // redirect from root route to /login route
   console.log("made it to calendar root get route");
   //idea make an array of dates that have assignments on them
   var requestedMonth = request.query.currentMonth;
   var requestedYear = request.query.currentYear;
   var usrid = request.query.usrid;
   var isproff = request.query.isproff;
   console.log(typeof isproff);
   console.log(usrid);
   // var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
   console.log(requestedMonth, ' ', requestedYear);
   //get the assignments from a query here and pass it to the html
   var query = 'SELECT (C.courseID) FROM users U JOIN enrollment E ON u.usrID=E.usrID JOIN course C ON C.courseID=E.courseID where (u.usrID = $1)'
   db.any(query, usrid).then(function(rows){
    console.log(rows)
    var courses = []
    rows.forEach(function(rows){
        courses.push(rows.courseid)
    })
    console.log(courses)

    //now have to query for each assignment for every course in courses Array


    //now retrieve the assignments for the courses the user is enrolled

   }).catch(function(error){
        request.flash('error', 'Could not find user course data');
        //console.log(error)
    //     response.render('index', {
    //     month:requestedMonth, 
    //     year:requestedYear }
    //)
    })
    //)





   response.render('index', {
    month:requestedMonth, 
    year:requestedYear, 
    usrid: usrid,
    isproff: isproff

   });

});



module.exports = router;
