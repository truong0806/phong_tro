const postRegister = require('./post-register')
const postLogin = require('./post-login')

module.exports = {
  paths: {
    '/api/v1/auth/register': {
      ...postRegister,
    },
    '/api/v1/auth/login': {
      ...postLogin,
    },
  },
}
