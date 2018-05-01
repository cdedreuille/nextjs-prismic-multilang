const next = require('next')
const { parse } = require('url')
const { createServer } = require('http')

const dev = process.env.NODE_ENV !== 'production'

const routes = require('./routes')
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/') {
      const indexUrl = parse(req.url + 'en-gb', true)
      console.log(indexUrl)
      handler(req, res, indexUrl)      
    } else if (pathname === '/c') {
      app.render(req, res, '/d')      
    } else {
      handler(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('Ready to go on 3000')
  })
  })
