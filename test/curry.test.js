const currying = require('../src/curry')
const handler = function (a,b,c,d,e) {
    return `${a}-${b}-${c}-${d}-${e}`
}
const caller = currying(handler)
test('curry test 1', () => {
    const t1 = caller(1,2,3,4,5)
    expect(t1).toBe('1-2-3-4-5')
})
test('curry test 2', () => {
    const t2 = caller(1,2)(3,4,5)
    expect(t2).toBe('1-2-3-4-5')
})
test('curry test 3', () => {
    const t2 = caller(1)(2)(3)(4)(5)
    expect(t2).toBe('1-2-3-4-5')
})