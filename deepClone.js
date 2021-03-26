function deepClone (obj) {
  if (typeof obj !== 'object' || typeof obj == null) {
    return obj
  }
  let res = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnproperty(key)) {
      res[key] = deepClone(obj[key])
    }
  }
 return res
}