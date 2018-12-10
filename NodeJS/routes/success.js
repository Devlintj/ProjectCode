var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
  //check to make sure there is a validationg string generated
  var validationString = request.query.valid;
  console.log(request.query)
  if(validationString === 'success' ){
   console.log('Made it to success root route');
   var usrid = request.query.usrid;
   var isproff = request.query.isproff;
   console.log('passed usrid: ', usrid)
   console.log('passed isproff: ', isproff)
   var now = new Date();
   var currentMonth = encodeURIComponent(now.getMonth());
   var currentYear = encodeURIComponent(now.getFullYear());
   usrid = encodeURIComponent(usrid);
   isproff = encodeURIComponent(isproff);

   response.redirect('/calendar?currentMonth='+currentMonth+'&currentYear='+currentYear+'&usrid='+usrid+'&isproff='+isproff);
   //response.render('success')
 }
 else{
    response.redirect('/login')
 }
});

module.exports = router;
