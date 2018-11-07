function XO(str) {
  let xc = 0
  let oc = 0
  str.split("").map(a => {
    if (a === "x" || a === "X") {
      xc++
    }
    if (a === "o" || a === "O") {
      oc++
    }
  })
  if (xc === oc) {
    return true
  } else {
    return false
  }
}