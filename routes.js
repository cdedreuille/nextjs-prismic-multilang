const routes = module.exports = require('next-routes-with-locale')({ locale: 'fr-fr' })

routes
  .add('index', 'en-US', '/')
  .add('index', 'en-GB', '/')
  .add('index', 'fr-fr', '/')
  .add('en-US', 'en-US', '/en-US')
  .add('en-GB', 'en-GB', '/en-GB')
  .add('fr', 'fr', '/fr')
  .add('faq', 'en-GB', '/faq')
  .add('faq', 'en-US', '/faq')
  .add('faq', 'fr-fr', '/faq')
