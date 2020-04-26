import rules from './rules'

export default (ctx, inject) => {
  inject('validation', rules)
}
