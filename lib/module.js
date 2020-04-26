const { resolve, join, basename } = require('path')
const packageJson = require('../package.json')

function validationModule (_moduleOptions) {
  const ROOT_DIR = packageJson.name
  const files = ['util.js', 'rules.js', 'plugin.js']
  
  for (const file of files) {
    this.addPlugin({
      src: resolve(__dirname, file),
      fileName: join(ROOT_DIR, file)
    })
  }
}

module.exports = validationModule
module.exports.meta = require('../package.json')
