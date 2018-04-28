const routes = module.exports = require('next-routes-with-locale')({ locale: 'en-gb' })

routes
  .add('faq', 'en-gb', '/faq')
  .add('faq', 'fr-fr', '/faq')
  .add('blog', 'en-gb', '/blog')
