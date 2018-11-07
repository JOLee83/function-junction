function calculate_total(subtotal, tax, tip) {
  return Math.round((subtotal + (subtotal * tax / 100) + (subtotal * tip / 100)) * 100) / 100
}