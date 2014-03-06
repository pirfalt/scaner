module.exports = function Scaner(init, fn) {
  return function scaner(next) {
    return init = fn(init, next)
  }
}
