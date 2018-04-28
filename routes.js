const routes = module.exports = require('next-routes-with-locale')({ locale: 'en_gb' })

routes
  .add('faq', 'en_gb', '/faq')
  .add('blog', 'en_gb', '/blog')
