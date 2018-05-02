const express = require('express')
const path = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes')
const indexHandle = routes.getRequestHandler(app, ({req, res, route, query}) => {
  const newRoute = '/' + req.language + route.page
  app.render(req, res, route.page, query )
})

const handle = routes.getRequestHandler(app)

const requestLanguage = require('express-request-language')

    app.prepare()
      .then(() => {
        const server = express()

        server.use(requestLanguage({ 
          languages: ['en-US', 'en-GB', 'fr']
        }))

        server.get('/', function(req, res)  {
          if (req.language ===  'en-US') {
            res.redirect('/en-US');
          } else if(req.language === 'en-GB') {
            res.redirect('/en-GB');
          }
          console.log(req.language);
          indexHandle(req, res)
        })

        server.listen(3000, (err) => {
          if (err) throw err
          console.log('> Ready on port 3000')
        })
      });
