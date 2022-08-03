const express   =require('express');
const mongoos   =require('mongoose');
const morgan    =require('morgan');
const vodyParsor=require('body-parser');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/User')
const employeeRoutes = require('./routes/Employee')

mongoos.connect('mongodb://localhost:27017/test',);
const db=mongoos.connection

db.on('error',(err)=>{
    console.log(err);
})
db.once('open',()=>{
    console.log("Connected");
})

const app =express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


const PORT =process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is running on: ${PORT}`)
})


app.use('/api/user',userRoutes)
app.use('/api/employee',employeeRoutes)