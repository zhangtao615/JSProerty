// bind实现

Function.prototype.bind = function() {
  // 将参数解析为数组
  const args = [...arguments]
  // 获取this
  let _this = args.shift()
  // 获取当前函数
  let self = this
  //返回函数
   return function () {
     return self.apply(_this, args)
   }
 }