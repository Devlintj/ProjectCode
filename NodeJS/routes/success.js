var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
   console.log('Made it to success root route');
   response.render('success')
});

module.exports = router;