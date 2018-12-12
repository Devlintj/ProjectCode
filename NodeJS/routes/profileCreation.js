var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');



router.post('/', function(request, response){
  console.log("made it to profileCreation post route");
  console.log(request.body);
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
     db.result('select * from users', r => r.rows).then(data => {userID += data.rowCount; console.log("COUNTED");
      db.manyOrNone(dbQueryAddUserString, [userID, 'John', 'Doe', email, password, isProf]).then(function(row){
        console.log("Successfully added new user");
        response.redirect('/success?valid='+'success'+'&usrid='+userID+'&isproff='+isProf);
      }).catch(function(error){
        console.log('Failed');
        response.redirect('/profileCreatioin?registerButton=');
      })


     });
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