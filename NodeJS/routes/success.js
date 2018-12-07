var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
  //check to make sure there is a validationg string generated
  var validationString = request.query.valid;
  if(validationString === 'success' ){
   console.log('Made it to success root route');
   var now = new Date();
   var currentMonth = encodeURIComponent(now.getMonth());
   var currentYear = encodeURIComponent(now.getFullYear());

   response.redirect('/calendar?currentMonth='+currentMonth+'&currentYear='+currentYear);
 }
 else{
    response.redirect('/login')
 }
});

module.exports = router;
