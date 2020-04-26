const { resolve, join, basename } = require('path')
const { readdirSync } = require('fs')
const packageJson = require('../package.json')

function validationModule (_moduleOptions) {
  const ROOT_DIR = packageJson.name
  const CURRENT_FILE = basename(__filename)
  
  for (const file of readdirSync(__dirname)) {
    if (file === CURRENT_FILE) continue

    this.addPlugin({
      src: resolve(__dirname, file),
      fileName: join(ROOT_DIR, file)
    })
  }
}

module.exports = validationModule
module.exports.meta = require('../package.json')
