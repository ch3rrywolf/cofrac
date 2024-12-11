const router = require('express').Router()
const authController = require('../controllers/authControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/login', authController.login)
router.post('/api/inspections/inspecteur/add',middleware.auth,middleware.role, authController.add_inspecteur)

module.exports = router