const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const routes = require('./routes')
const app = next({ dev })
const handler = routes.getRequestHandler(app)

const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
})
