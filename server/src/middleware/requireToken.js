import jwt from 'jsonwebtoken'

function requireToken(req, res, next) {
  let accessToken = req.headers.authorization?.split(' ')[1]
  console.log("🚀 ~ file: requireToken.js:5 ~ requireToken ~ accessToken:", accessToken)
  
  if (!accessToken) {
    return res.status(401).json({ err: 1, msg: 'Missing access token' })
  }

  jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
    console.log("🚀 ~ file: requireToken.js:9 ~ jwt.verify ~ user:", user)
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
