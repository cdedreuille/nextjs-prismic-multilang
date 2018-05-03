const routes = module.exports = require('next-routes-with-locale')({ locale: 'en-gb' })

routes
  .add('index', 'en-us', '/')
  .add('index', 'en-gb', '/')
  .add('index', 'fr-fr', '/')
  .add('faq', 'en-us', '/faq')
  .add('faq', 'en-gb', '/faq')
  .add('faq', 'fr-fr', '/faq')
