const routes = module.exports = require('next-routes-with-locale')({ locale: 'fr-fr' })

routes
  .add('index', 'en_US', '/')
  .add('index', 'en_GB', '/')
  .add('index', 'fr-fr', '/')
  .add('faq', 'en-gb', '/faq')
  .add('faq', 'en-us', '/faq')
  .add('faq', 'fr-fr', '/faq')
