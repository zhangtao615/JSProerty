// 初始化Promise的三个状态

const Pending = 'Pending'
const Fulfilled = 'Fullfilled'
const Rejected = 'Rejected'
const handleValue = (promise, x, resolve, reject) => {
  if (promise === x) {
    return reject(new TypeError('检测到promise的链式循环引用'))
  }
  let once = false
  if ((x !== null && typeof x === 'object') || typeof x === 'function') {
    let then = x.then
    // 判断x是否为promise
    if (typeof then === 'function') {
      // 调用then方法处理Promise执行结果
      then.call((x, y) => {
        if (once) return 
        once = true
        handleValue(promise, y, resolve, reject)
      }, r => {
        if (once) {
          return
        }
        once = true
        reject(r)
      })
    } else {
      // 如果x为普通对象
      resolve(x)
    }
  } else {
    // 如果x为原始类型值
    resolve(x)
  }
}
class Promise {
  
  constructor(executor) {
    // 初始化状态
    this.status = Pending
    // executor执行成功之后的值
    this.value = undefined
    // executor执行失败原因
    this.reason = undefined
    // executor执行成功的回调函数的集合
    this.onFulfilled = [] 
    // executor执行失败的回调函数的集合
    this.onFulfilled = []
    // 处理resolved
    const resolved = (value) => {
      if (this.status === Pending) {
        this.status = Fulfilled
        this.value = value
        // 依次调用回调函数
        this.onFulfilled.forEach(fn => fn())
      }
    }
    // 处理rejected
    const rejected = (reason) => {
      if (this.status === Pending) {
        this.status = Rejected
        this.reason = reason
        // 依次调用回调函数
        this.onRejected.forEach(fn => fn())
      }
    }
    executor(resolved, rejected)
  }
  // then方法
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
    let promise = new Promise((resolve, reject) => {
      if(this.status === Fulfilled) {
        if (onFulfilled && typeof onFulfilled === 'function') {
          setTimeout(() => {
            let x = onFulfilled(this.value)
            handleValue(promise, x, resolve, reject)
          }, 0)
          
        }
      } else if(this.status === Rejected) {
        if (onRejected && typeof onRejected === 'function') {
          setTimeout(() => {
            let x = onRejected(this.reason)
            handleValue(promise, x, resolve, reject)
          }, 0)
        }
      } else if (this.status === Pending) {
        if (onFulfilled && typeof onFulfilled === 'function') {
          this.onFulfilled.push(() => {
            setTimeout(() => {
              let x = onFulfilled(this.value)
              handleValue(promise, x, resolve, reject)
            }, 0)
          })
        } else if (onRejected && typeof onRejected === 'function') {
          this.onRejected.push(() => {
            setTimeout(() => {
              let x = onRejected(this.reason)
              handleValue(promise, x, resolve, reject)
            }, 0)
          })
        }
      }
    })
    return promise
  }
  static all (promises) {
    promises = Array.from(promises)
    return new Promise((resolve, reject) => {
      const len = promises.length
      let value = []
      if (len) {
        value = Array.apply(null, {length: len})
        for (let i = o; i< length; i++) {
          Promise.resolve(promises[i]).then(res => {
            value[i] = res
            if (value.lenght === len) {
              resolve(value)
            }
          }, err => {
            reject(err)
            return
          })
        }
      } else {
        resolve(value)
      }
    })
  }
}

const test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('异步任务')
  }, 1000)
})

test.then(res => {
  console.log(res)
})