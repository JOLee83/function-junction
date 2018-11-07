function smallEnough(a, limit) {
  let counter = 0
  a.map(b => {
    if (b > limit) {
      counter++
    }
  })
  if (counter > 0) {
    return false
  } else {
    return true
  }
}