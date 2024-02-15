const Router = require('express')
const mailingController = require('../controllers/mailingController')
const router = new Router()


router.post('/request-price', mailingController.postInfo)
router.post('/request-call', mailingController.postNumber)


module.exports = router