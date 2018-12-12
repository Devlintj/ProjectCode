var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');



router.post('/', function(request, response){
  console.log("made it to profileCreation post route")
  //response.render('profileCreation')
  request.assert('email', 'email is required').notEmpty();
   request.assert('pswd', 'password is required').notEmpty();
   request.assert('cfmPswd', 'confirm password is required').notEmpty();
   request.assert('pswd', 'password and confirm password are not the same').equals('cfmPswd');
   var queryCheckEmailNotTaken = 'select (email) from users where(email = $1)';
   if(db.oneOrNone(queryCheckEmailNotTaken, 'email')=== null){
     //make eroor message
     request.flash('error', 'Creation failed');
     response.render('profileCreation');
   }
   else{
    var email = request.sanitize('email').escape().trim();
    var password = request.sanitize('pswd').escape().trim();
     var isProf;
     if(request.isProffessor)
     {
        isProf = true;
     }
     else
     {
        isProf = false;
     }
     var dbQueryAddUserString = 'Insert into users(usrID, fName, lName, email, pwdID, isProff) values($1, $2, $3, $4, $5, $6)';
     userID = 1;
     db.result('select count(*) from users', c => +c.count).then(count => {userID = userID + count});//we need to get this working
     console.log(userID);
     console.log("just before adding the profile");

     var hardcode = "Insert into users(usrID, fName, lName, email, pwdID, isProff) values("+userID+", 'fname', 'lname', '"+email+"', '"+password+";, "+isProf+")";
     db.manyOrNone(hardcode).then(function(row){console.log('bro')//need to double check that this is working.  It might be dishing out errors
         response.redirect('/success?valid='+'success'+'&usrid='+userID+'&isproff='+isProf)}
         ).catch(function(err){
              console.log("yah yeet");
              response.redirect('/profileCreatioin?registerButton=');

             //request.flash('error', 'Creation failed');
             //response.render('profileCreation',{data:request.body});
         })
     }
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