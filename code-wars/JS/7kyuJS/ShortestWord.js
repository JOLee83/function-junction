function findShort(s) {
  let str = s.split(' ')
  let shortest = 20
  let word = null
  for (let i = 0; i <= str.length - 1; i++) {
    if (shortest > str[i].length) {
      shortest = str[i].length
    }
  }
  return shortest
}