const getCategory = require('./get-category')

module.exports = {
  paths: {
    '/api/v1/category/all': {
      ...getCategory,
    },
  },
}
