function requireToken(req, res, next) {
  const token = req.headers.authorization // Lấy token từ header

  if (!token) {
    return res.status(401).json({ message: 'Yêu cầu cung cấp token.' })
  }

  // Kiểm tra token ở đây (ví dụ: kiểm tra trong cơ sở dữ liệu)

  if (!isValidToken(token)) {
    return res.status(403).json({ message: 'Token không hợp lệ.' })
  }

  next() // Chuyển tiếp yêu cầu nếu token hợp lệ
}
export default requireToken
