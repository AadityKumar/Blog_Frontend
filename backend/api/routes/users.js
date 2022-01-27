var express = require('express');
var userModel = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var userDetails = new userModel({
    name: 'Aaditya',
    email: 'aadi@gmail.com',
    password: 'aadi@123',
    
  });

  userDetails.save(function(err,req1){
    if(err) throw err;
   
    res.render('index', { title: 'User Data Inserted' });
       
  })

  
});

module.exports = router;

