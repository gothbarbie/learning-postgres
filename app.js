const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

// Middlewares

// -- BodyParser
app.use(bodyParser.json())

// -- Routes
app.use('/', routes)

// -- Error Handler
app.use((err, req, res, next) => {
  res.json(err)
})

module.exports = app
