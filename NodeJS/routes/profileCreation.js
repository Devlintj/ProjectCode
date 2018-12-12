var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');



router.post('/profileCreation', function(request, response){
  console.log("made it to profileCreation post route");
  response.render('profileCreation');
  //request.assert('email', 'email is required').notEmpty();
  // request.assert('pswd', 'password is required').notEmpty();
  // request.assert('cfmPswd', 'confirm password is required').notEmpty();
  // request.assert('pswd', 'password and confirm password are not the same').equals('cfmPswd');
  // var queryCheckEmailNotTaken = 'select (email) from users where(email = $1)';
  // if(db.oneOrNone(queryCheckEmailNotTaken, 'email')=== null){
  //   //make eroor message
  //   request.flash('error', 'Creation failed');
  //   response.render('profileCreation');
  // }
  // else{
  //   var isProf = document.getElementById("isProfessor").checked;
  //   //var dbQueryAddUserString = 'Insert into users(email, pswd, isProffessor) values(request.sanitize('email'), request.sanitize('pswd'), isProf;
  //   var dbQueryAddUserString = 'Insert into users(email, pswdID, isProffessor) values($1, $2, $3)';
  //   db.none(dbQueryAddUserString, [email,pswd, isProf]).then(
  //       response.render('login')
  //       ).catch(function(error){
  //           request.flash('error', 'Creation failed');
  //           response.render('profileCreation');
  //       })
  //   }
});




router.get('/', function (request, response) {
   console.log('Made it to profile creation root route');
   response.render('profileCreation', {data: {}});
});

router.get('/profileCreation', function(request, response){
    console.log('Made it to profileCreation route');
    response.render('profileCreation');
})


module.exports = router;