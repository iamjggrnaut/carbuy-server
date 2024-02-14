const Router = require('express')
const mailing = require('../controllers/mailing')
const router = new Router()


router.post('/send-info', () => { console.log('Done'); })


module.exports = router