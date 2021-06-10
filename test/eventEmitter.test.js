const EventEmitter = require('../src/eventEmitter')
const ee = new EventEmitter()
const handler = function(msg) { return 'hello ' + msg }
ee.addListener('hello', handler)

test('eventEmitter', () => {
    ee.emit('hello', 'jason')
    ee.on('hello',function(msg){
        console.log(msg)
        expect(msg).toBe('hello jason')
    })
}) 