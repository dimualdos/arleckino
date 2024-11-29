export function validatePassword(password: string): boolean {
  if (!password.trim()) {
    return false
  }
  if (password.length < 6 || password.length > 12) {
    return false
  }

  const hasNumber = /[0-9]/.test(password)
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)

  return hasNumber && hasUpperCase && hasLowerCase
}
