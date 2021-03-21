// new实现
/*
  1. 创建一个空对象,将这个对象的__proto__指向构造函数的prototype
  2. 执行构造函数
  3. 返回值为object类型则作为new方法的返回值返回，否则返回上述全新对象
*/

Function.prototype.new = function () {
  let obj = {}
  let [constructor, ...args] = [...arguments]
  obj.__proto__ = constructor.prototype
  let res = constructor.apply(obj, args)
  if (res && typeof res === 'function' || typeof res === 'object') {
    return res
  }
  return obj
}









