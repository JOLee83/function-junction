function abbrevName(name) {
  let names = name.split(' ')
  let FI = names[0].split('')
  let LI = names[1].split('')
  return `${FI[0].toUpperCase()}.${LI[0].toUpperCase()}`
}