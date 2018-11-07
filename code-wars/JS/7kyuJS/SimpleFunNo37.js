function houseNumbersSum(inputArray) {
  let sum = 0
  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i]
    if (inputArray[i] === 0) {
      return sum
    }
  }
}