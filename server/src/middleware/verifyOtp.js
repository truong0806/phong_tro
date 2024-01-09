import jwt from 'jsonwebtoken'

function verifyOtp(req, res, next) {
    let { otp } = req.body
    console.log("🚀 ~ file: verifyOtp.js:5 ~ verifyOtp ~ otp:", otp)
 
}
export default requireToken
