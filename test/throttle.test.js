const throttle = require('../src/throttle')

test('throttle', () => {
    let str = ''
    const g = function (name) {
        return str+=name
    } 
    const c = throttle(g, 100)
    c('jason')
    c('jason')
    c('jason')
    c('jason')
    expect(str).toEqual('jason')
})
test('throttle out range', async () => {
    const fn = () => new Promise(async resolve => {
        let str = ''
        const g = function (name) {
            return str+=name
        } 
        const c = throttle(g, 1)
        console.log(c)
        const sleep = time => new Promise(resolve => setTimeout(() => resolve(),time))
        c('jason')
        c('jason')
        await sleep(200)
        c('jason')
        resolve(str)
    })
    const ret = await fn()
    expect(ret).toEqual('jason')
})