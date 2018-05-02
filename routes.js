const routes = module.exports = require('next-routes-with-locale')({ locale: 'fr-fr' })

routes
  .add('index', 'en-US', '/')
  .add('index', 'en-GB', '/')
  .add('en-US', 'en-US', '/en-US')
  .add('en-GB', 'en-GB', '/en-GB')
  .add('faq', 'en-gb', '/faq')
  .add('faq', 'en-us', '/faq')
  .add('faq', 'fr-fr', '/faq')
