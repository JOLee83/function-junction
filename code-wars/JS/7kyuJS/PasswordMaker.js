function makePassword(phrase) {
  return phrase.split(" ").map(p => {
    if (p[0] == "i" || p[0] == "I") {
      return "1"
    }
    if (p[0] == "s" || p[0] == "S") {
      return "5"
    }
    if (p[0] == "O" || p[0] == "o") {
      return "0"
    } else {
      return p[0]
    }
  }).join("")
}