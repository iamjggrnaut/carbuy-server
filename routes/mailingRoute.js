const Router = require('express')
const mailing = require('../controllers/mailing')
const router = new Router()


router.post('/request-price', () => { console.log('Done'); })
router.post('/request-call', () => { console.log('Done'); })


module.exports = router