import rules from './rules'
import util from './util'

export default (ctx, inject) => {
  const validation = { ...rules, ...util }
  inject('validation', validation)
}
