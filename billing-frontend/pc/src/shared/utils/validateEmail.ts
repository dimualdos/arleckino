export const validateEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateEmail = (value: string) => {
  return validateEmailRegex.test(value) ? true : false
}
