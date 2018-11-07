function minValue(values) {
  let y
  return parseInt(values.sort().map(x => {
    if (y === null) {
      y = x
      return x
    }
    if (y === x) {
      return null
    } else {
      y = x
      return x
    }
  }).join(''), 10)
}