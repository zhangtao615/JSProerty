function deepClone (obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let res = obj instanceof Array ? [] : {}
  for (let key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key])
    }
  }
  return res
}