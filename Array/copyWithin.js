// array.copyWithin(target, start, end) copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中

let fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits.copyWithin(2, 0, 2)
console.log(fruits) // [ 'Banana', 'Orange', 'Banana', 'Orange' ]