/**
 * 节流 规定单位时间内，只能触发一次函数 如果这个单位时间内触发多次函数 只执行一次
 * @param {*} fn 
 * @param {*} wait 
 */
const throttle = function (fn, wait) {
    let context
    let args
    let previous
    return function() {
        let now = +new Date()
        context = this
        args = arguments
        if (now - previous > wait) {
            fn.apply(context, args)
            previous = now
        }
    }
}
module.exports = throttle