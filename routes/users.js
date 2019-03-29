var express = require('express');
var router = express.Router();
var model=require('../models/index')
var Joi = require('Joi');
/* GET users listing. */
router.get('/GetUser/', function(req, res, next) {
  //res.send('respond with a resource');
  model.User.findAll({}).then(todo=>res.json({
    error: false,
    data: todo
  }))
  .catch(error => res.json({
    error: true,
    data: [],
    error: error
}));

});

/* GET users listing. */
router.post('/InsertUser/', function(req, res, next) {
  //res.send('respond with a resource');
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    departmentId,
    countryId
} = req.body;

var schema = Joi.object().keys({
  firstName: Joi.string().min(5).max(10).required().label("Enter Proper firstName here"),
  lastName: Joi.string().min(5).max(10).required().label("Enter Proper last name here"),
  email:Joi.string().email().required().label("Enter valid email"),
  mobileNumber:Joi.required().label("Enter mobile number"),
  departmentId:Joi.number().required().label("Enter department id"),
  countryId:Joi.number().required().label("Enter country id")

});
Joi.validate(req.body, schema, function(err, value) {
  if (err) {
    return catched(err.details); 
  }
  else{
    model.User.create({
      firstName,
      lastName,
      email,
      mobileNumber,
      departmentId,
      countryId
  })
  .then(user => res.status(200).json({
      error: false,
      data: user,
      message: 'New User has been created.'
  }))
  .catch(error => res.json({
      error: true,
      data: [],
      error: error
  }));
  }
});

function catched(reject) {
  res.json({
    error: true,
    data: [],
    error: reject
  });
}



});



module.exports = router;
