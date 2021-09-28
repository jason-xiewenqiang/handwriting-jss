function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function deepClone(obj) {
  if (!isObject(obj)) return obj;
  let target = Array.isArray(obj) ? [] : {};
  Reflect.ownKeys(obj).forEach((item) => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item]);
    } else {
      target[item] = obj[item];
    }
  });
  return target;
}

function shallowCopy (object) {
  if (!object || typeof object !== 'object') return
  let newObject = Array.isArray(object) ? [] : {};
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key]
    }
  }
  return newObject
}

function deepCopy(obj) {
  if (!object || typeof object !== 'object') return;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}
