Function.prototype.bind = function () {
    const args = arguments || []
    const context = args[0]
    const func = this
    const thisArgs = Arrya.prototype.slice.call(args, 1)
    const returnFc = function () {
        Array.prototype.push.apply(thisArgs, arguments)
        return func.apply(this instanceof func ? this : context, thisArgs)
    }
    returnFc.prototype = new func()
    return returnFc
}

Function.prototype.myBind = function (context) {
    let args = [...arguments].slice(1)
    let fn = this
    return function Fn() {
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...args)
        )
    }
}