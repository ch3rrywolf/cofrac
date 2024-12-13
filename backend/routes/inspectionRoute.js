const router = require('express').Router()
const middleware = require('../middlewares/middleware')
const inspectionsController = require('../controllers/inspectionsController')

router.post('/api/inspections/add', middleware.auth, inspectionsController.add_inspections)
router.put('/api/inspections/update/:inspections_id', middleware.auth, inspectionsController.update_inspections)
router.put('/api/inspections/status-update/:inspections_id', middleware.auth, inspectionsController.update_inspections_update)
router.get('/api/images', middleware.auth, inspectionsController.get_images)
router.post('/api/images/add', middleware.auth, inspectionsController.add_images)


router.get('/api/inspections', middleware.auth, inspectionsController.get_dashboard_inspections)
router.get('/api/inspections/:inspections_id', middleware.auth, inspectionsController.get_dashboard_single_inspections)




module.exports = router