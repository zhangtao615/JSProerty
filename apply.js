Function.prototype.bind = function (ctx, array) {
  ctx = ctx || window;
  var fn = Symbol(); 
  var result;
  if (!array) {    // 判断array是否存在        
    result = ctx[fn]();    
  }    
  else {        
    result = ctx[fn](...array);    
  }    
  delete ctx[fn];    
  return result;
};