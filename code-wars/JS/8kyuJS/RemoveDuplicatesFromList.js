function distinct(a) {
  let b = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      a.splice(i, 1)
      i--
    }
    b = a[i]
  }
  return a
}