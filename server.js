const express = require('express')
const path = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes')
const handle = routes.getRequestHandler(app, ({req, res, route, query}) => {
  app.render(req, res, route.page, query)
})

const requestLanguage = require('express-request-language')

    app.prepare()
      .then(() => {
        const server = express()

        server.use(requestLanguage({ 
          languages: ['en-US', 'en-GB', 'fr']
        }))

        server.get('*', (req, res) => handle(req, res))

        server.listen(3000, (err) => {
          if (err) throw err
          console.log('> Ready on port 3000')
        })
      });
