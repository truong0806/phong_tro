import jwt from 'jsonwebtoken'

function requireToken(req, res, next) {
  let accessToken = req.headers.authorization?.split(' ')[1]
  if (!accessToken) {
    return res.status(401).json({ err: 1, msg: 'Missing access token' })
  }
  jwt.verify(accessToken, 'truong911', (err, user) => {
    if (err)
      return res.status(401).json({
        err: 1,
        msg: 'Access token expired',
      })
    req.user = user
    next()
  })
}
export default requireToken
