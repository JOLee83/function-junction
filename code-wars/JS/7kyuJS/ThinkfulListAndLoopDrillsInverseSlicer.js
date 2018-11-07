function inverseSlice(items, a, b) {
  let end = items.splice(b, items.length - 1)
  let start = items.splice(0, a)
  return start.concat(end)
}