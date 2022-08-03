const mongoos       = require('mongoose');
const schema        = mongoos.Schema

const mongoosePagination =  require('mongoose-paginate-v2')

const EmployeeSchema = new schema({
    empID:{
        type :String
    },
    firstName:{
        type :String
    },
    lastName:{
        type :String
    },
    emailId:{
        type :String
    },
    orgName:{
        type :String
    },
    orgDesc:{
        type :String
    }
},{timestamps:true})

EmployeeSchema.plugin(mongoosePagination)
const Employee =mongoos.model('Employee',EmployeeSchema)
module.exports = Employee