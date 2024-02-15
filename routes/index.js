const Router = require('express')
const router = new Router()
const mailingController = require('../controllers/mailingController')

router.use('/mail/request-call', mailingController.postNumber)
router.use('/mail/request-info', mailingController.postInfo)


module.exports = router