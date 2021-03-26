// every() 方法用于检测数组所有元素是否都符合指定条件(通过函数提供)

var ages = [32, 33, 16, 40]
let res = ages.every(age => age > 18)
console.log(res)