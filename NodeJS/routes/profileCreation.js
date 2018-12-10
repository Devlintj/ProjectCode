var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');

router.get('/', function (request, response) {
   console.log('Made it to profile creation root route');
   response.render('profileCreation');
});

router.get('/profileCreation', function(request, response){
    console.log('Made it to profileCreation route');
    response.render('profileCreation');
})

router.post('/profileCreation', [
  check('email').isEmail().trim().normailzeEmail()
],
function(request, response){
  console.log("made it to profileCreation post route")
  request.assert('email', 'email is required').notEmpty();
  request.assert('pswd', 'password is required').notEmpty();
  request.assert('cfmPswd', 'confirm password is required').notEmpty();
  request.assert('pswd', 'password and confirm password are not the same').equals('cfmPswd');
  var queryCheckEmailNotTaken = 'select (email) from users where(email = $1)';
  if(db.oneOrNone(queryCheckEmailNotTaken, 'email')=== null){
    //make eroor message
  };
  else{
    var isProf = document.getElementById("isProfessor").checked;
    var dbQueryAddUserString = 'Insert into users(email, pswd, isProffessor) values(request.sanitize('email'), request.sanitize('pswd'), isProf;
  }


}
);

module.exports = router;
