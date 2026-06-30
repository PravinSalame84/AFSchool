export function normalizeWhitespace(value = '') {
  return String(value).replace(/\s+/g, ' ').trim()
}

export function normalizePhone(value = '') {
  return String(value).replace(/\D/g, '').slice(0, 10)
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(value).trim())
}

export function isValidIndianMobile(value) {
  return /^[6-9][0-9]{9}$/.test(String(value))
}

export function isValidPersonName(value) {
  return /^[A-Za-z][A-Za-z\s'.-]{1,}$/.test(normalizeWhitespace(value))
}
