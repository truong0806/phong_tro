class TokenService {
  getLocalRefreshToken() {
    const token = JSON.parse(
      localStorage.getItem('persist:auth')
    )?.refreshToken.slice(1, -1);
    return token;
  }

  getLocalAccessToken() {
    const token = JSON.parse(localStorage.getItem('persist:auth'));
    return token?.accessToken;
  }

  updateLocalAccessToken(accessToken) {
    let user = JSON.parse(localStorage.getItem('persist:auth'));
    user.accessToken = accessToken;
    localStorage.setItem('persist:auth', JSON.stringify(user));
  }
}

export default new TokenService();
