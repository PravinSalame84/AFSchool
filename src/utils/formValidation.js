export function isValidEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value)
}

export function isValidIndianMobile(value) {
  return /^[0-9]{10}$/.test(value)
}
