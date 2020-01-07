const express = require('express')

const UserController = require('../controllers/UserController')

const UserRoutes = express.Router()

UserRoutes.post('/', UserController.store)
UserRoutes.get('/', UserController.getUsers)

module.exports = UserRoutes
