const next = require('next')
const { parse } = require('url')
const { createServer } = require('http')

const dev = process.env.NODE_ENV !== 'production'

const routes = require('./routes')
const app = next({ dev })
const handler = routes.getRequestHandler(app)

const locale = require('locale')
const supported = new locale.Locales(['en_GB', 'en_US'])

app.prepare().then(() => {
  createServer((req, res) => {
    const locales = new locale.Locales(req.headers["accept-language"])
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    const lang = locales.best(supported).toString()
    console.log('server lang ' + lang)
    if (pathname === '/') {
      const indexUrl = parse(req.url + lang, true)
      console.log(indexUrl)
      handler(req, res, indexUrl)      
    } else {
      handler(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('Ready to go on 3000')
  })
  })
