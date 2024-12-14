const router = require('express').Router()
const pdfControllers = require('../controllers/pdfControllers')
// const middleware = require('../middlewares/middleware')



router.post('/api/createPdf', pdfControllers.createPdf)
router.get('/api/fetchPdf', pdfControllers.fetchPdf)
router.post('/api/sendPdf',pdfControllers.sendPdf)

module.exports = router