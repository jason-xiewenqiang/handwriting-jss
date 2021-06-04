/**
 *  防抖   在事件被触发时 过了n秒后再被执行 如果在这n秒内又触发 则重新计时
 * @param {*} fn 事件
 * @param {*} wait 等待时间
 * @param {*} immediate 是否当前立即执行
 * @returns callback
 */
const debounce = function(fn, wait, immediate = false) {
    let timeout
    return function() {
        const context = this
        const args = arguments
        timeout && clearTimeout(timeout)
        if (immediate) {
            const callNow = !timeout;
            timeout = setTimeout(function() {
                timeout = null
            }, wait)
            callNow && fn.apply(context, arguments)
        } else {
            timeout = setTimeout(function () {
                fn.apply(context, args)
            }, wait)
        }
    }
} 
module.exports = debounce