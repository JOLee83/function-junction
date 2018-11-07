function oddOrEven(array) {
  return array.length === 0 ? 'even' :
    (array.reduce((accumulator, currentValue) =>
      accumulator + currentValue)) % 2 === 0 ? 'even' : 'odd'
}