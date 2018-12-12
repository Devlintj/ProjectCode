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
    var usr = parseInt(usrid, 10);
    var isproff = request.query.isproff;
    var info = [];

    var dbQuery = 'select * from users U Join enrollment E on u.usrID=E.usrID join course C on C.courseID=E.courseID join events EV on ev.courseID=C.courseID where (U.usrID = $1)'
    // db.any(dbQuery, [usr]).then(data =>{
    //     console.log(data);
    //     data.forEach(function(data){
    //       info.push(data);
    //   })
    //     console.log(info)

    db.result(dbQuery, usr, r => r.rows).then(data => {
        console.log(data);
        data.forEach(function(data){
            //console.log(data.courseid);
            info.push(data.dept+' '+data.coursenum+' '+data.description);
        })

        console.log(info);
        var correctedMonth = parseInt(month, 10);
    correctedMonth += 1;
    response.render('stud', {
        passedmonth:correctedMonth, 
        passedyear: year, 
        passedday:day,
        passedusrid:usrid,
        passedisproff: isproff,
        data: info
    });
        

    }).catch(function(error){
        console.log(error);
        request.flash('error', 'Failed to lookup course data');
        response.redirect('/calendar?currentMonth='+month+'&currentYear='+year+'&usrid='+usrId+'&isproff='+isproff);
    });

    // var correctedMonth = parseInt(month, 10);
    // correctedMonth += 1;
    // response.render('stud', {
    //     passedmonth:correctedMonth, 
    //     passedyear: year, 
    //     passedday:day,
    //     passedusrid:usrid,
    //     passedisproff: isproff,
    //     data: info
    // });

});





module.exports = router;