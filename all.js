Promise.All = function (arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) return resolve([])
    let res = [], count = 0
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i] instanceof Promise) {
        res[i] = arr[i]
        if (++count === arr.length) {
          resolve(res)
        }
      } else {
        arr[i].then(data => {
          res[i] = data
          if (++count === arr.length) {
            resolve(res)
          }
        }, err => {
          reject(err)
        })
      }
    }
  })
}