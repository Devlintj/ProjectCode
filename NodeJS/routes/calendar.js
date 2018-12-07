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
   var requestedMonth = request.query.currentMonth;
   var requestedYear = request.query.currentYear;
   // var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
   console.log(requestedMonth, ' ', requestedYear);
   //get the assignments from a query here and pass it to the html

   response.render('index', {
    month:requestedMonth, 
    year:requestedYear, 
    
   });

});




module.exports = router;
