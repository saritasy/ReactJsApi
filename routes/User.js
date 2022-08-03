const express =  require('express');
const router = express.Router()

const AuthenticateControler = require('../controllers/AuthenticateController')
const authenticate   = require('../Midalware/Authenticate')

router.post('/register',AuthenticateControler.register)
router.post('/login',AuthenticateControler.login)
router.get('/userlist',authenticate,AuthenticateControler.userList)
router.post('/deleteuser',AuthenticateControler.deleteUser)


module.exports = router