export default (ctx, inject) {
  const rules = require('./rules')
  inject('validation', rules)
}
