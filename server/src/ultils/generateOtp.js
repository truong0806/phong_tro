import otpGenerator from 'otp-generator'
import bcrypt from "bcrypt";

const generateOtp = async() => {
  const otp = otpGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  })
  const salt = await bcrypt.genSalt(10)
  const hashOtp = await bcrypt.hash(otp, salt)
  return {
    hashOtp,
    otp
  }
}

export default generateOtp
