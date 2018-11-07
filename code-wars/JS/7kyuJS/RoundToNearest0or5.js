function roundToFive(numbers) {
  return numbers.map(number => Math.round(number / 5) * 5)
}