function vowelBack(s) {
  return s.split("").map(x => {
    let y = x.charCodeAt()
    if (y === 114 || y === 115 || 119 <= y && y <= 122) {
      return String.fromCodePoint(y - 17)
    }
    if (y === 99 || y === 111) {
      return String.fromCodePoint(y - 1)
    }
    if (y === 100 || y === 101) {
      return String.fromCodePoint(97)
    }
    if (y === 117) {
      return String.fromCodePoint(112)
    }
    if (y === 98 || 103 <= y && y <= 104 || 106 <= y && y <= 110 || 112 <= y && y <= 113) {
      return String.fromCodePoint(y + 9)
    }
    if (y === 97) {
      return String.fromCodePoint(118)
    }
    else {
      return String.fromCodePoint(y)
    }
  }).join("")
}