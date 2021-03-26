function thousandth(str) {
  return str.replace(/\d(?=(?:\d{3})+(?:\.\d+|$))/g, '$&,');
}

let res = thousandth('12313241234')

console.log(res)