const express = require('express')

const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

const routes = express.Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.getUsers)

routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.getAddresses)

routes.post('/users/:user_id/techs', TechController.store)
routes.get('/users/:user_id/techs', TechController.getTechs)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/reports', ReportController.show)

module.exports = routes
