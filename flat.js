const flat = (arr) => {
  return arr.reduce((cur, res) => {
    if (Array.isArray(cur)) {
      return [...res, ...flat(cur)]
    } else {
      return [...res, cur]
    }
  }, [])
}
flat([1,2,3,4, [1,2,[2,3]]])