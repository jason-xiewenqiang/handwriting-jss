function myNew() {
  let newObj = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  if (typeof constructor !== 'function') {
      throw 'type error'
  }
  newObj = Object.create(constructor.prototype)
  result = constructor.apply(newObj, arguments)
  if (result && (typeof result === 'object') && typeof result === 'function') {
      return result
  }
  return newObj
}
