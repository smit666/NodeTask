var express=require('express');
var router=express.Router();
var model=require('../models/index');

router.get('/GetDepartment',function(req,res,next){
    model.Department.findAll({})
    .then(dep => res.json({
        error: false,
        data: dep
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));

});

router.post('/InsertDepartment',function(req,res,next){
 const {
name,
decription
}=req.body
    model.Department.create({
name,
decription
    })
    .then(dep => res.json({
        error: false,
        data: dep
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));

});

module.exports = router;