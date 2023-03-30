const genarateCode = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const number = '123456789'
  let code = ''
  for (let i = 0; i < length - 1; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return `${code}${number.charAt(Math.floor(Math.random() * number.length))}`
}

export default genarateCode
