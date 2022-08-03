const express =  require('express');
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')
const authenticate   = require('../Midalware/Authenticate')

router.get('/',authenticate,EmployeeController.index)
router.post('/show',EmployeeController.show)
router.post('/addemployee',EmployeeController.store)
router.post('/update',EmployeeController.update)
router.post('/delete',EmployeeController.distroy)
router.post('/filter',EmployeeController.filter)

module.exports = router