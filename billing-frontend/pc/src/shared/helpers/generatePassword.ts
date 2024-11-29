export const generatePassword = () => {
  const length = 5
  const charsetsArray = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789"]
  let temp = ""
  for (let i = 0; i < length; i += 1) {
    const currentCharset = Math.floor(Math.random() * (3 - 0) + 0)
    const charset = charsetsArray[currentCharset]
    temp += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  temp += charsetsArray[0].charAt(Math.floor(Math.random() * charsetsArray[0].length))
  temp += charsetsArray[1].charAt(Math.floor(Math.random() * charsetsArray[1].length))
  temp += charsetsArray[2].charAt(Math.floor(Math.random() * charsetsArray[2].length))
  return temp
}
