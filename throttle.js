// 一段时间内用户多次操作只执行一次
function throttle (fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      return 
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}