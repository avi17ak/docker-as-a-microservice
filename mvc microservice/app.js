const express = require('express')
const cors = require('cors')

const artistRouter = require('./routers/artists')

const app = express()

app.use(express.json())
app.use(cors)

app.get("/", (req,res) => {
    res.send("Welcome to the Artists API")
})

app.use('/artists', artistRouter)

module.exports = app