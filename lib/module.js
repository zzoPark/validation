const path = require('path')

function validationModule (_moduleOptions) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'validation.js'
  })
}

module.exports = validationModule
module.exports.meta = require('../package.json')
