const LRUCache = require('../src/LRU') 
const LRUCacheInst = new LRUCache(5)
LRUCacheInst.put('one', 'xNma')

test('LRUCache test 1', () => {
    const ret = LRUCacheInst.get('one')
    expect(ret).toEqual('xNma')
})

LRUCacheInst.put('two', 'balabala')
test('LRUCache test 2', () => {
    const ret = LRUCacheInst.get('two')
    expect(ret).toEqual('balabala')
})

LRUCacheInst.put('three', 'balabala3')
LRUCacheInst.put('three', 'balabala4')
LRUCacheInst.put('three', 'balabala5')
LRUCacheInst.put('three', 'balabala6')

test('LRUCache test 3', () => {
    const ret = LRUCacheInst.get('three')
    expect(ret).toEqual('balabala6')
})
LRUCacheInst.put('three1', 'balabala5')
LRUCacheInst.put('three2', 'balabala6')
test('LRUCache test 4', () => {
    const ret = LRUCacheInst.size()
    expect(ret).toBe(5)
})