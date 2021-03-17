// call实现

Function.prototype.call = function (ctx) {
    var args = [...arguments].slice(1);  // 这里使用es6的方法，取出了this外的所有参数
    ctx.fn = this;         // 改变this指向
    var result = ctx.fn(...args);     // 执行函数，因为args为数组，所以解构出来
    delete ctx.fn;
    return result;
}