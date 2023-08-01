const express = require('express')
const router = express.Router()
const { login , signup , getAllUsers , userbyEmail , getUserByID , deleteUser , updateUser} = require('./Controller')


router.post('/signup', signup)
router.post('/login', login)
router.get('/get-all-users', getAllUsers)
router.get('/get-user-by-email', userbyEmail) 
router.get('/get-user-by-id', getUserByID)
router.delete('/delete-user', deleteUser) 
router.update('/update-user', updateUser) 

module.exports = router;