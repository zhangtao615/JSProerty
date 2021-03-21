function ajax () {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url, true) // true 表示异步
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 操作
    }
  }
  xhr.send()
}