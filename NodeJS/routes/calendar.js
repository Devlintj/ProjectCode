//Calendar route
var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');
// var courses = [];
var dueDates = [];

router.get('/', function (request, response) {
   // redirect from root route to /login route
   console.log("made it to calendar root get route");
   console.log(request.query);

   if(Object.keys(request.query).length === 0){
    response.redirect('/login');
   }
   else{
    // TODO      clear dueDates array;

     var requestedMonth = request.query.currentMonth;
     var requestedYear = request.query.currentYear;
     var usrid = request.query.usrid;
     var isproff = request.query.isproff;
     var courses = [];
     console.log(typeof isproff);
     console.log(usrid);
     console.log(requestedMonth, ' ', requestedYear);
     //get the assignments from a query here and pass it to the html
     var requestMonthNum = parseInt(requestedMonth, 10);
     requestMonthNum += 1;
     var requestYearNum = parseInt(requestedYear, 10);


     
     var firstDayDate = requestYearNum.toString()+'-'+requestMonthNum.toString()+'-'+'01';
     var lastDayDate = requestYearNum.toString()+'-'+requestMonthNum.toString()+'-';
     if (requestMonthNum === 1 || requestMonthNum === 3 || requestMonthNum === 5 || requestMonthNum === 7 || requestMonthNum === 8 || requestMonthNum === 10 || requestMonthNum === 12){
      lastDayDate = lastDayDate + '31';
     }

     else if (requestMonthNum === 4 || requestMonthNum === 6 || requestMonthNum === 9 ||requestMonthNum === 11){
      lastDayDate = lastDayDate + '30';
     }

     else if (requestMonthNum === 2){
      lastDayDate = lastDayDate + '28';
     }

     
     console.log("About to query for assignment due dates");
     console.log(firstDayDate);
     console.log(lastDayDate);

     var query = 'select (EV.dueDate) from users U Join enrollment E on u.usrID=E.usrID join course C on C.courseID=E.courseID join events EV on ev.courseID=C.courseID where (U.usrID = $1) and (EV.dueDate between $2 and $3);'
     db.any(query, [usrid, firstDayDate, lastDayDate]).then(function(rows){
      console.log(rows);
      rows.forEach(function(rows){
          dueDates.push(rows.duedate)
      })
      //courses.push(rows);
      console.log(dueDates);
      //TODO try to split into substring to just get the days of the due dates
      //console.log(dueDates[0]);

      // var splitStr = dueDates[0].toString();
      // splitStr = splitStr.split(" ");
      // console.log('splitting string');
      //know split string will have the form 'Day of week', 'Mon', 'Day', 'Year', ...
      //only care about the Day since we already know what month and year we are dealing with. 

      //look through and get strings of dates with an assignment for out user
      var size = length(dueDates);
      var days = [];
      var dayStr;
      for(var i=0;i<size;i++){
        dayStr = dueDates[i].toString();
        dayStr = dayStr.splitStr(" ");
        dayStr = dayStr[2];
        days.push(dayStr);

      }
      console.log("displaying day strings");
      console.log(days);



     }).catch(function(error){
          request.flash('error', 'Could not find user course data');
      })










      //)
      //numberOfCourses = courses.length;
      //console.log("HERE");
      //console.log(numberOfCourses);
      //console.log(courses);
      //console.log("Past");



      //TODO move this code into the query code
     response.render('index', {
      month:requestedMonth, 
      year:requestedYear, 
      userid: usrid, 
      usertype: isproff
     });

 }

});



module.exports = router;
