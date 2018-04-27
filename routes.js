const routes = module.exports = require('next-routes')()

routes
  .add('faq', '/faq')
  .add('blog', '/:language/blog')
  .add('blog/:slug', '/:language/blog/:slug')
