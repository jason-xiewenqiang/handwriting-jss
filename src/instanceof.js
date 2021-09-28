function myInstanceOf(left, right) {
    let _proto_ = Object.getPrototypeOf(left)
    let prototype = right.prototype
    while (true) {
        if (!_proto_) return false
        if (_proto_ === prototype) return true
        _proto_ = Object.getPrototypeOf(_proto_)
    }
}