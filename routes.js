const routes = module.exports = require('next-routes-with-locale')({ locale: 'fr-fr' })

routes
  .add('index', 'en-gb', '/')
  .add('index', 'en-us', '/')
  .add('index', 'fr-fr', '/')
  .add('faq', 'en-gb', '/faq')
  .add('faq', 'fr-fr', '/faq')
  .add('blog', 'en-gb', '/blog')
