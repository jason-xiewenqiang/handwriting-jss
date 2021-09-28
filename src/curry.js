function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
add(1)(2)(3);

const curry = (fn) =>
  (judge = (...args) =>
    args.length === fn.length
      ? fn(...args)
      : (...args) => judge(...args, ...args));

function currying(fn, len = fn.length) {
  return _curry.call(this, fn, len);
}
function _curry(fn, len, ...args) {
  return function (...params) {
    let _args = [...args, ...params];
    if (_args.length >= len) {
      return fn.apply(this, _args);
    } else {
      return _curry.call(this, fn, len, ..._args);
    }
  };
}
module.exports = currying;

/**
 * 柯里化（Currying），又称部分求值（Partial Evaluation），是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
 * 并且返回接受余下的参数而且返回结果的新函数的技术。核心思想是把多参数传入的函数拆成单参数（或部分）函数，内部再返回调用下一个单参数（或部分）函数，依次处理剩余的参数。
 * @param {*} fn
 * @param  {...any} args
 * @returns
 */
function currying(fn, ...args) {
  const length = fn.length;
  let allArgs = [...args];
  const res = (...newArgs) => {
    allArgs = [...allArgs, ...newArgs];
    if (allArgs.length === length) {
      return fn(...allArgs);
    } else {
      return res;
    }
  };
  return res;
}

function Curry(fn, args) {
  let length = fn.length;
  args = args || [];
  return function () {
    let subArgs = args.slice(0);
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }
    if (subArgs.length >= length) {
      return fn.apply(this, subArgs);
    } else {
      return Curry.call(this, fn, subArgs);
    }
  };
}
