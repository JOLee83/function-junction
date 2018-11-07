function trouble(x, t) {
  for (let i = 0; i < x.length; i++) {
    let k = i + 1
    if (x[i] + x[k] === t) {
      x.splice(k, 1)
      i--
    }
  }
  return x
}