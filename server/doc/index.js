const basicInfo = require('./basicInfo')
const servers = require('./servers')
const components = require('./components')
const tags = require('./tags')
const api = require('./apis')

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...api,
}
