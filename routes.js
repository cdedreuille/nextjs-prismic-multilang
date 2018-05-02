const routes = module.exports = require('next-routes-with-locale')({ locale: 'fr-fr' })

routes
  .add('en_US', 'en_US', '/en_US')
  .add('en_GB', 'en_GB', '/en_GB')
  .add('faq', 'en-gb', '/faq')
  .add('faq', 'en-us', '/faq')
  .add('faq', 'fr-fr', '/faq')
