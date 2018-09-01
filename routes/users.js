const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const data = require('../models/data');
const blog = require('../models/blog');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

//sample data provider
/* router.get('/data', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
 //method 2 fetching data form user model or create new model called as data model to provide data
 
  data.getProductDetails( (docs)=>{
  
  if(docs){
    console.log("Data: "+res.json(docs));
    res.json(docs);
  }else{
    console.log('No docs found in db: ' + docs);
  }
 });
 //data.getProductDetails();
 
}); */

//Blogs
router.get('/data', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
 data.getProductDetails((docs)=>{
    if(docs){
      console.log('IF   From users routing'+ docs);
      console.log("IF   from user routing DB " + res.json(docs));
      docs.forEach(()=>{
        console.log("from routing model"+docs);
      });
    }else{
      console.log('ELSE     From users routing'+ docs);
      console.log("ELSE     No Blogs from DB " +res.json(docs));
    /* docs.forEach(()=>{
      console.log("from routing model"+docs);
    }); */
    }
  }); 

  //method two by passing res object to model

  data.getBlogs((err, docs)=>{
    if (err){
      console.log(err);
    }
    if(docs == null){
      console.log('no records');
    } 
    res.json(docs);
    console.log('Check' + docs);
    /* res.json(docs);
    console.log('Check' + docs);
    docs.forEach(()=>{
      console.log(docs._id);
    }); */
  });

});

router.get('/dataPagining', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
	data.getPagining( (err, docs)=>{
	if (err){
      console.log(err);
    }
    if(docs == null){
      console.log('no records');
    } 
    res.json(docs);
    console.log('Check' + docs);
	});
});

router.get('/dataByQuery', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
	var pageNumber = req.query.pageNumber;
	console.log('-------------pageNumber********* ');
	console.log('From USER ROUTING: ', pageNumber);
	
	data.getPaginingByQuery( pageNumber, (err, docs)=>{
	if (err){
      console.log(err);
    }
    if(docs == null){
      console.log('no records');
    } 
    res.json(docs);
    console.log('Check' + docs);
	});
});



module.exports = router;
