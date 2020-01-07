const express = require('express')
const UserRoutes = require('./routes/UserRoutes')
const AddressRoutes = require('./routes/AddressRoutes')
const TechRoutes = require('./routes/TechRoutes')
const ReportRoutes = require('./routes/ReportRoutes')

require('./database')

const app = express()

app.use(express.json())

app.use('/users', UserRoutes)
app.use('/users', AddressRoutes)
app.use('/users', TechRoutes)
app.use('/reports', ReportRoutes)

app.listen(3333)
