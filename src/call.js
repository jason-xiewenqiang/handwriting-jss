Function.prototype.call = function(context) {
    context = context || window
    let args = [...arguments].slice(1)
    let result
    context.fn = this
    result = context.fn(...args)
    delete context.fn
    return result
}