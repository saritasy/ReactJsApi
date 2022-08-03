const bccrypt     = require('bcryptjs');
const { response } = require('express');
const jwt         =require('jsonwebtoken');
const UserModel = require('../models/UserModel');


const register = (req,res,next)=>{
    let userModel = new UserModel({
        emailId:req.body.emailId,
        password :req.body.password
    })
    userModel.save()
    .then(response=>{
        res.json({
            message: 'Added Successfully'
        })
    })
    .catch(error=>{
        res.json({
            message: 'Error Ocured'
        })
    })
}


const login = (req,res,next)=>{
    var username = req.body.emailId
    var password = req.body.password
    UserModel.findOne({$or:[{emailId:username},{password:password}]})
    .then(UserModel=>{
        if(UserModel){
            var isPasswordEqual=password==UserModel.password
            var isUsernameEqual=username==UserModel.emailId
            if(isPasswordEqual && isUsernameEqual){
                let token= jwt.sign({name:UserModel.username},'verySecretValue',{expiresIn:'1h'})
                res.json({
                    message:'Login SuccessFull',
                    token
                })
            }else{
                res.json({
                    message:'Password or Username Does not Match'
                })
            }
        }else{
            res.json({
                message:'USer Not found'
            })
        }
    })
    .catch(error=>{
        res.json({
            message: 'Error while login'
        })
    })
}

const userList = (req,res,next)=>{
    UserModel.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message: 'Error Ocured'
        })
    })
}

const deleteUser = (req,res,next)=>{
    let empID= req.body.empID
    UserModel.findByIdAndRemove(empID)
    .then(response=>{
        res.json({
            message: 'Employee deleted Successfully'
        })
    })
    .catch(error=>{
        res.json({
            message: 'Error Ocured'
        })
    })
}
const Desc = (req,res,next)=>{
    let employee = new Employee({
        firstName:req.body.firstName,
        lastName :req.body.lastName,
        emailId  :req.body.emailId,
        empID    :req.body.empID,
        orgName  :req.body.orgName,
        orgDesc  :req.body.orgDesc
    })
    employee.save()
    .then(response=>{
        res.json({
            message: 'Added Successfully'
        })
    })
    .catch(error=>{
        res.json({
            message: 'Error Ocured'
        })
    })
}
module.exports = {
    register,login,userList,deleteUser,Desc
}