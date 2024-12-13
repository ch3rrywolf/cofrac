const router = require('express').Router()
const clientsControllers = require('../controllers/clientControllers')
const middleware = require('../middlewares/middleware')



router.post('/api/clients/add',middleware.auth,middleware.role, clientsControllers.add_clients)
router.get('/api/clients',middleware.auth,middleware.role, clientsControllers.get_clients)

module.exports = router