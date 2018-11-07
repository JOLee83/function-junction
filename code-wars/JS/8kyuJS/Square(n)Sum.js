function squareSum(numbers) {
  const numbers1 = numbers.map(x => x * x)
  let numbers2 = 0
  for (let i = 0; i < numbers1.length; i++) {
    numbers2 = numbers2 + numbers1[i]
  }
  return numbers2
}