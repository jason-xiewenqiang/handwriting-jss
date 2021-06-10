function add (a) {
    return function (b) {
        return function (c) {
            return a+b+c
        }
    }
}
add(1)(2)(3)

const curry = fn => (judge = (...args) => args.length === fn.length ? fn(...args) :(...args) => judge(...args,...args))


function currying (fn, len = fn.length) {
    return _curry.call(this, fn, len)
}
function _curry(fn, len, ...args) {
    return function (...params) {
        let _args = [...args, ...params]
        if (_args.length >= len) {
            return fn.apply(this, _args)
        } else {
            return _curry.call(this, fn, len, ..._args)
        }
    }
}
module.exports = currying