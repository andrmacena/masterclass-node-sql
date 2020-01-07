const express = require('express')

const TechController = require('../controllers/TechController')

const TechRoutes = express.Router()

TechRoutes.post('/:user_id/techs', TechController.store)
TechRoutes.get('/:user_id/techs', TechController.getTechs)
TechRoutes.delete('/:user_id/techs', TechController.delete)

module.exports = TechRoutes
