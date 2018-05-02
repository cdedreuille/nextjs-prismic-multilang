const routes = module.exports = require('next-routes-with-locale')({ locale: 'en_GB' })

routes
  .add('index', 'en_GB', '/')
  .add('index', 'en_US', '/')
  .add('index', 'fr-fr', '/')
  .add('faq', 'en-gb', '/faq')
  .add('faq', 'en-us', '/faq')
  .add('faq', 'fr-fr', '/faq')
