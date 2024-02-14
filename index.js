require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routes/index')
const fs = require('fs')

const app = express()

app.use('/static', express.static('static'))
app.use(cors())

app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

    } catch (e) { console.log(e); }
}

start()