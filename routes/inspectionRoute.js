const router = require('express').Router()
const middleware = require('../middlewares/middleware')
const inspectionsController = require('../controllers/inspectionsController')

router.post('/api/inspections/add', middleware.auth, inspectionsController.add_inspections)


module.exports = router