const Router = require('express')
const router = new Router()
const mailingRoute = require('./mailingRoute')

router.use('/mail', mailingRoute)


module.exports = router