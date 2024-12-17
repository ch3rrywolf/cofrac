const router = require('express').Router()
const pdfControllers = require('../controllers/pdfControllers')
// const middleware = require('../middlewares/middleware')



router.post('/api/createPdf', pdfControllers.createPdf)
router.get('/api/fetchPdf', pdfControllers.fetchPdf)
router.post('/api/sendPdf',pdfControllers.sendPdf)

router.post('/api/createPdfAp', pdfControllers.createPdfAp)
router.get('/api/fetchPdfAp', pdfControllers.fetchPdfAp)
router.post('/api/sendPdfAp',pdfControllers.sendPdfAp)

router.post('/api/createPdfAv', pdfControllers.createPdfAv)
router.get('/api/fetchPdfAv', pdfControllers.fetchPdfAv)
router.post('/api/sendPdfAv',pdfControllers.sendPdfAv)

module.exports = router