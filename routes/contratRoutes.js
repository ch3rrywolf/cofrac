const router = require('express').Router()
const contratControllers = require('../controllers/contratControllers')
const middleware = require('../middlewares/middleware')



router.post('/api/contrats/add',middleware.auth,middleware.role, contratControllers.add_contrats)
router.get('/api/contrats',middleware.auth,middleware.role, contratControllers.get_contrats)

module.exports = router