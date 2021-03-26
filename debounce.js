// 防抖 用户在操作暂停后一段时间内没有继续操作则触发
function debounce (fn , delay) {
  let timer = null
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}