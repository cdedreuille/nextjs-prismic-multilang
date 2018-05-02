const routes = module.exports = require('next-routes-with-locale')({ locale: 'en-gb' })

routes
  .add('index', 'en-gb', '/')
  .add('index', 'en-us', '/')
  .add('index', 'fr-fr', '/')
  .add('faq', 'en-gb', '/faq')
  .add('faq', 'en-us', '/faq')
  .add('faq', 'fr-fr', '/faq')
