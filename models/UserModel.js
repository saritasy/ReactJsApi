const mongoos       = require('mongoose');
const schema        = mongoos.Schema

const UserSchema = new schema({
    firstName:{
        type :String
    },
    lastName:{
        type :String
    },
    emailId:{
        type :String
    },
    password:{
        type :String
    },
    empID:{
        type :String
    },
    orgName:{
        type :String
    }
},{timestamps:true})

const User =mongoos.model('UserModel',UserSchema)
module.exports = User