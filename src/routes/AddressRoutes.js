const express = require('express')

const AddressController = require('../controllers/AddressController')

const AddressRouter = express.Router()

AddressRouter.post('/:user_id/addresses', AddressController.store)
AddressRouter.get('/:user_id/addresses', AddressController.getAddresses)

module.exports = AddressRouter
