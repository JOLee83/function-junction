function alphabetWar(fight) {
  let left = "sbpw"
  let right = "zdqm"
  let count = 0
  let prevCount = 0
  let skip = false
  fight.split("").map(x => {
    if (x === "*") {
      count = count - prevCount
      skip = true
      prevCount = 0
    }
    else if (skip === true) {
      skip = false
    }
    else if (left.includes(x)) {
      count = count + (left.indexOf(x) + 1)
      prevCount = (left.indexOf(x) + 1)
    }
    else if (right.includes(x)) {
      count = count - (right.indexOf(x) + 1)
      prevCount = -(right.indexOf(x) + 1)
    }
    else {
      prevCount = 0
      return
    }
  })

  return count < 0 ? "Right side wins!" : count > 0 ? "Left side wins!" : "Let's fight again!"
}