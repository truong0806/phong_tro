import { verify } from 'jsonwebtoken'

const middlewareController = {
  //verifyToken
  verifyToken: (req, res, next) => {
    const accessToken = req.header('Authorization')
    if (token) {
      verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(403).json('Token is not valid')
        }
        req.user = user
        next()
      })
    } else {
      return res.status(401).json("You're not authenticated")
    }
  },

  verifyTokenAndAdminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.id == req.params.id || req.user.admin) {
        next()
      } else {
        return res.status(403).json("You're not allowed to delete other")
      }
    })
  },
}

export default middlewareController
