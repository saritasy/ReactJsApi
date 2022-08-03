const bccrypt     = require('bcryptjs');
const jwt         =require('jsonwebtoken');
const Employee = require('../models/Employee');


// Show the list of employee
// const index = (req,res,next)=>{
//     Employee.find()
//     .then(response=>{
//         res.json({
//             response
//         })
//     })
//     .catch(error=>{
//         res.json({
//             message: 'Error Ocured'
//         })
//     })
// }
// get record with pagination

const index = (req,res,next)=>{
        Employee.find()
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
const index = (req,res,next)=>{
    if(req.query.page && req.query.limit){
        Employee.paginate({},{page:req.query.page,limit:req.query.limit})
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message: 'Error Ocured'+error
        })
    })
    }else{
        Employee.find()
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
    
}

// get User By ID
const show = (req,res,next)=>{
    let empID=req.body.empID
    Employee.findById(empID)
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



const store = (req,res,next)=>{
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


const update =(req,res,next)=>{
    let empID= req.body.empID

    let employee = new Employee({
        firstName:req.body.firstName,
        lastName :req.body.lastName,
        emailId  :req.body.emailId,
        orgName  :req.body.orgName
    })

    Employee.findByIdAndUpdate(empID,{$set:employee})
    .then(response=>{
        res.json({
            message: 'Employee Updated Successfully'
        })
    })
    .catch(error=>{
        res.json({
            message: 'Error Ocured'+error
        })
    })
}


const distroy = (req,res,next)=>{
    let empID= req.body.empID
    Employee.findByIdAndRemove(empID)
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

const filter = (req,res,next)=>{
    var sortby=req.query.sortBy
    if(sortby=='firstName'){
        var mysort = { firstName: 1 };
    }else if(sortby=='lastName'){
        var mysort = { lastName: 1 };
    }else if(sortby=='emailId'){
        var mysort = { emailId: 1 };
    }else if(sortby=='empID'){
        var mysort = { empID: 1 };
    }else if(mysort=='orgName'){
        var mysort = { orgName: 1 };
    }else if(mysort=='orgDesc'){
        var mysort = { orgDesc: 1 };
    }
    Employee.find().sort(mysort)
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
module.exports = {
    index,show,store,update,distroy,filter
}