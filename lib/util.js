const { removeDups } = require('@zzopark/common-utils')

exports.required = (v) => !!v || 'Required.'

exports.notAllowed = (regex) => (v) => {
  if (!v) return false
  const matches = v.match(regex)
  if (matches === null) return true
  return `Not allowed characters ${removeDups(matches)}`
}

exports.noSpaces = (v) => {
  const regex = /[\s]+/
  return !regex.test(v) || 'No spaces.'
}

exports.minLength = (min) => (v) => {
  if (!v) return false
  return v.length >= min || `Need more than ${min} characters.`
}

exports.notStartWith = (s) => (v) => {
  if (!v) return false
  !v.startsWith(s) || `Cannot start with "${s}".`
}

exports.notEndWith = (s) => (v) => {
  if (!v) return false
  !v.endsWith(s) || `Cannot end with "${s}".`
}

exports.invalid = (regex) => (v) => (
  regex.test(v) || 'Invalid.'
)
