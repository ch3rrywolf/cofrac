const router = require('express').Router()
const chantierControllers = require('../controllers/chantierControllers')
const middleware = require('../middlewares/middleware')



router.post('/api/chantiers/add',middleware.auth,middleware.role, chantierControllers.add_chantiers)
router.get('/api/chantiers',middleware.auth,middleware.role, chantierControllers.get_chantiers)
router.get('/api/chantiers/:chantiers_id', middleware.auth, chantierControllers.get_dashboard_single_chantiers)


module.exports = router