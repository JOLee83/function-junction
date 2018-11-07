function alphabetWar(fight) {
  let count = 0
  let hits = fight.split('').map(hit => {
    if (hit === "w") {
      count += 4
    }
    if (hit === "m") {
      count -= 4
    }
    if (hit === "p") {
      count += 3
    }
    if (hit === "q") {
      count -= 3
    }
    if (hit === "b") {
      count += 2
    }
    if (hit === "d") {
      count -= 2
    }
    if (hit === "s") {
      count += 1
    }
    if (hit === "z") {
      count -= 1
    }
  })
  if (count < 0) {
    return "Right side wins!"
  }
  if (count > 0) {
    return "Left side wins!"
  } else {
    return "Let's fight again!";
  }
}