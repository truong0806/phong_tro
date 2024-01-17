import jwt from 'jsonwebtoken'
import { generateAccessToken } from '../src/middleware/jwt'

describe('generateAccessToken', () => {
  test('should generate a valid access token', () => {
    const id = 1
    const phone = '1234567890'
    const secretKey = process.env.SECRET_KEY
    const expiresIn = '3d'

    const expectedToken = jwt.sign({ id, phone }, secretKey, { expiresIn })

    const generatedToken = generateAccessToken(id, phone)

    expect(generatedToken).toEqual(expectedToken)
  })
})
