var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
  var validationString = request.query.valid;
  if(validationString === 'success' ){
   console.log('Made it to success root route');
   response.render('success')
 }
 else{
    response.redirect('/login')
 }
});

module.exports = router;
