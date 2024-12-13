const router = require('express').Router()
const operationsControllers = require('../controllers/operationsControllers')
const middleware = require('../middlewares/middleware')



router.post('/api/operations/add',middleware.auth,middleware.role, operationsControllers.add_operations)
router.get('/api/operations',middleware.auth,middleware.role, operationsControllers.get_operations)

module.exports = router