const express = require('express')

const ReportController = require('../controllers/ReportController')

const ReportRouter = express.Router()

ReportRouter.get('/', ReportController.show)

module.exports = ReportRouter
