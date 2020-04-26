const { removeDups } = require('@zzopark/common-utils')

exports.required = (v) => !!v || 'Required.'

exports.notAllowed = (regex) => (v) => {
  const matches = v.match(regex)
  if (matches === null) return true
  return `Not allowed characters ${removeDups(matches)}`
}

exports.noSpaces = (v) => {
  const regex = /[\s]+/
  return !regex.test(v) || 'No spaces.'
}

exports.minLength = (min) => (v) => (
  v.length >= min || `Need more than ${min} characters.`
)

exports.notStartWith = (s) => (v) => (
  !v.startsWith(s) || `Cannot start with "${s}".`
)

exports.notEndWith = (s) => (v) => (
  !v.endsWith(s) || `Cannot end with "${s}".`
)

exports.invalid = (regex) => (v) => (
  regex.test(v) || 'Invalid.'
)
