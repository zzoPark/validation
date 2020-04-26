const rules = require('./rules')

export default (ctx, inject) => {
  inject('validation', rules)
}
