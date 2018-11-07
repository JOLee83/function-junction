function moveTen(s) {
  return s.split("").map(x => {
    let y = x.charCodeAt() + 10
    if (y < 123) {
      return String.fromCodePoint(y)
    } else {
      return String.fromCodePoint(y - 26)
    }
  }).join("")
}