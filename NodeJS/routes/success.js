var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
  //check to make sure there is a validationg string generated
  var validationString = request.query.valid;
  if(validationString === 'success' ){
   console.log('Made it to success root route');
   response.redirect('/calendar')
 }
 else{
    response.redirect('/login')
 }
});

module.exports = router;
