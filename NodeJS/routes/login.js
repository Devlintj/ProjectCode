var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check');
var db = require('../database.js');



router.get('/', function (request, response) {
   // redirect from root route to /login route
   console.log("made it to root get route")
   response.redirect('/login')
});

router.get('/login', function (request, response) {
   // render the views/login.ejs template file
   console.log("made it to login get route")
   response.render('login', {
     //initialize data variable to be empty
     //data is used to store the information from the html forms
    data: {},

    })
});

router.post('/login',[
    //validate the email that's given
    check('usremail').isEmail().trim().normalizeEmail()
    ],
    function(request, response){
    //validate that email and password are not empty
    console.log("made it to login post route")
    request.assert('usremail', 'email is required').notEmpty();
    request.assert('pswd', 'password is required').notEmpty();

    var errors = request.validationErrors();

    if(!errors){//search db if no errors
        //TODO: implement a password hashing function here!!!!!!!!!


        //currently just entering the passwordID in the password field to test
        //functionality.
        var cleanedData = {
            email: request.sanitize('usremail').escape().trim(),
            password: request.sanitize('pswd').escape().trim()
        };

        console.log('cleanedData: email=' + cleanedData.email + ' password='+cleanedData.password);

        var query = 'select (email, pwdID) from users where(email= $1 and pwdID = $2)';
        //expect one row from the query
        db.one(query, [cleanedData.email, cleanedData.password]).then(function(result){
          var string = encodeURIComponent('success')
            response.redirect('/success?valid='+string)
        }).catch(function (err){
            request.flash('error', 'Login Failed');
            response.render('login', {data:request.body})
        })


    }
    else{
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br/>' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('login', {
            //keep data from email form so user doesn't have to retype it
            data: request.body
        })

    }

});



module.exports = router;
