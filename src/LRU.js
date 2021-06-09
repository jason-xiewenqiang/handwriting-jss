class LRUCache {
    constructor(capacity = 10) {
        this.capacity = capacity
        this.cache = {}
        this.keys = []
    }
    get(key) {
        if (this.cache[key]) {
            this.remove(this.keys, key)
            this.keys.push(key)
            return this.cache[key]
        }
    }
    put(key, value) {
        if (this.cache[key]) {
            this.cache[key] = value
            this.remove(this.keys, key)
            this.keys.push(key)
        } else {
            this.keys.push(key)
            this.cache[key] = value
            if (this.keys.length > this.capacity) {
                this.removeCache(this.cache, this.keys, key)
            }
        }
    }
    remove(arr, key) {
        if (arr.length) {
            const index = arr.indexOf(key)
            if (index > -1) {
                return arr.splice(index, 1)
            }
        }
    }
    removeCache(cache, keys, key) {
        cache[key] = null
        this.remove(keys, key)
    }
    size() {
        return this.keys.length
    }
}

module.exports = LRUCache