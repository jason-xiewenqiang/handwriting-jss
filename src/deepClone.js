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
