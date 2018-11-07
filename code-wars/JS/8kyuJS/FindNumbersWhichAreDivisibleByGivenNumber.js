function divisibleBy(numbers, divisor) {
  let numbers2 = numbers.filter(number => number % divisor === 0)
  return numbers2
}