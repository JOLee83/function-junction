const largestArrangement = array => {
  let maxCombine = (a) => +(a.sort((x, y) => +("" + y + x) - +("" + x + y)).join(''));
  return [array].map(maxCombine).pop()
}