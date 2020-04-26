const { resolve, join, basename } = require('path')

function validationModule (_moduleOptions) {
  const ROOT_DIR = 'validation'
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
