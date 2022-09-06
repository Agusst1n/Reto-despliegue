const UserController = require('../controllers/users')
const express = require('express')

const router = express.Router()

router.get('/all', UserController.findAllUsers)

router.post('/add', UserController.addUser)

module.exports = router