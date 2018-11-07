function maxNumber(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""))
}