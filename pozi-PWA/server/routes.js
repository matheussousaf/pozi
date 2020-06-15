const routes = require('next-routes');

module.exports = routes()
  .add('dash', '/', 'dashboard')
  .add('login-page', '/login', 'login')
  .add('estabelecimentos', '/estabelecimentos/:category', 'establishment')
;
