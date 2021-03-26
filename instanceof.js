// 左边的隐式原型在右边的原型链上】
function InstanceOf (left, right) {
  if (typeof left === 'function' || typeof left == null) {
    return false
  }
  let leftProto = left.__proto__, rightProto = right.prototype
  while(true) {
    if (leftProto == null) {
      return false
    } else if (leftProto === rightProto) {
      return true
    }
    leftProto = leftProto.__proto__
  }
}