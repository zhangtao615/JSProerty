// bind实现

Function.prototype.bind = function() {
  // 将参数解析成数组
  let [constructor, ...args] = [...arguments]
  // 获取参数第一项
  let _this = constructor
  // 获取当前函数
  let self = this
  // 返回函数
  return function({...arg}) {
    return self.apply(_this, [...args, ...arg])
  }
}