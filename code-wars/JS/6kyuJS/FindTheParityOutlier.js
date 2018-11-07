function findOutlier(integers) {
  let odd = 0
  let even = 0
  let countE = 0
  let countO = 0
  integers.map(x => {
    if (x % 2 == 0) {
      even = x
      countE++
    } else {
      odd = x
      countO++
    }
  })
  if (countE < countO) {
    return even
  } else {
    return odd
  }
}