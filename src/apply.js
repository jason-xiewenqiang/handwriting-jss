Function.prototype.myApply = function(context) {
    context = context || window
    context.fn = this
    let result
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        context.fn()
    }
    delete context.fn
    return result
}