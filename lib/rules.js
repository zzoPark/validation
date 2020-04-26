const util = require('./util')

const rules = {}

// Title
rules.title = [
  util.required
]

// Slug
const slugNotAllowed = /([`!@#$%^&*()_+=|\\/[\]{},.<>?'"])/g
rules.slug = [
  util.required,
  util.notAllowed(slugNotAllowed),
  util.noSpaces,
  util.notStartWith('-'),
  util.notEndWith('-')
]

// Tags
const tagsNotAllowed = /([`!@#$%^*|\[]{},.<>?'"])/g
rules.tags = [
  util.notAllowed(tagsNotAllowed),
  util.notStartWith('-'),
  util.notEndWith('-')
]

module.exports = () => ({ rules, util })
