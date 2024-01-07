import jwt from 'jsonwebtoken'

const generateAccessToken = (id, phone) => {
  return jwt.sign({ id: id, phone: phone }, process.env.SECRET_KEY, {
    expiresIn: '3d',
  })
}
const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY_REFRESH)
}
const generateRefeshToken = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET_KEY_REFRESH, {
    expiresIn: '7d',
  })
}

module.exports = {
  generateAccessToken,
  generateRefeshToken,
}
