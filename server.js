const express = require('express')
const path = require('path')
const next = require('next')
const parseAcceptLanguage = require('parse-accept-language');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes')
const handle = routes.getRequestHandler(app, ({req, res, route, query}) => {
 app.render(req, res, route.page, query )
})

app.prepare().then(() => {
  const server = express()

  server.get('/', function(req, res)  {
    const locale = parseAcceptLanguage(req)[0].value
    switch(locale) {
      case 'fr': res.redirect('/fr-fr'); break;
      case 'en-GB': res.redirect('/en-gb'); break;
      case 'en-US': res.redirect('/en-us'); break;
      default: res.redirect('/en-gb');
    }
    handle(req, res)
  })

  server.get('/faq', function(req, res)  {
    const locale = parseAcceptLanguage(req)[0].value
    switch(locale) {
      case 'fr': res.redirect('/fr-fr/faq'); break;
      case 'en-GB': res.redirect('/en-gb/faq'); break;
      case 'en-US': res.redirect('/en-us/faq'); break;
      default: res.redirect('/en-gb/faq');
    }
    handle(req, res)
  })

  server.get('*', function(req, res) {
    handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on port 3000')
  })
});
