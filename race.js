Promise.Race = function (arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) return resolve()
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i] instanceof Promise) {
        Promise.resolve(arr[i]).then(resolve, reject)
      } else {
        arr[i].then(resolve, reject)
      }
    }
  })
}