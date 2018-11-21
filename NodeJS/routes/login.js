var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
const { check } = require('express-validator/check')



router.get('/', function (request, response) {
   // render the views/login.ejs template file
   console.log("made it to root get route")
   response.render('login', {
    data: {}, 
    
    })
});

router.get('/login', function (request, response) {
   // render the views/login.ejs template file
   console.log("made it to login get route")
   response.render('login', {
    data: {}, 
    
    })
});

router.post('/login',[
    //validate the email that's passed
    check('usremail').isEmail().trim().normalizeEmail()
    ], function(request, response){
    //validate that email and password are not empty
    console.log("made it to login post route")
    request.assert('usremail', 'email is required').notEmpty();
    request.assert('pswd', 'password is required').notEmpty();

    var errors = request.validationErrors();

    if(!errors){


    }
    else{
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br/>' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('login', {
            data: request.body
        })

    }

});



module.exports = router;
