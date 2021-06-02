// 最外层不可以使用箭头函数 不然arguments会有问题的
const compose = function() { 
    const fns = [].slice.call(arguments)
    return (params) => {
        let res = params
        for (let i = fns.length - 1; i > -1; i--) {
            res = fns[i](res)
        }
        return res
    } 
}
module.exports = compose