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
    expect(str).toEqual('')
})
test('throttle out range', async () => {
    const fn = () => new Promise(async resolve => {
        let str = ''
        const g = function (name) {
            return str+=name
        } 
        const c = throttle(g, 1)
        const sleep = time => new Promise(resolve => setTimeout(() => resolve(),time))
        c('jason')
        await sleep(200)
        resolve(str)
    })
    const ret = await fn()
    expect(ret).toEqual('')
})