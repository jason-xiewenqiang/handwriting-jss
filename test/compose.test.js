const compose = require('../src/compose') 
test('compose(e, f, g)', () => {
    const g = name => name.replace(/\b([a-zA-Z])/, (match, $1) => {
           return $1.toUpperCase()
        })
    const f = name => `hi, ${name}`
    const e = str => `2021-06-02 : ${str}`
    expect(compose(e,f,g)('jason')).toBe('2021-06-02 : hi, Jason')
})