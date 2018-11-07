function getAverage(marks) {
  let sum = 0
  for (let i = 0; i < marks.length; i++) {
    let mark = marks[i]
    sum += mark
  }
  let avg = sum / marks.length
  return Math.floor(avg)
}