function getLocalRefreshToken() {
  const token = JSON.parse(
    localStorage.getItem('persist:auth')
  )?.refreshToken.slice(1, -1);
  return token;
}

function getLocalAccessToken() {
  const token = JSON.parse(localStorage.getItem('persist:auth'));
  return token?.accessToken;
}

function updateLocalAccessToken(accessToken) {
  let user = JSON.parse(localStorage.getItem('persist:auth'));
  user.accessToken = accessToken;
  localStorage.setItem('persist:auth', JSON.stringify(user));
}
const exportedObject = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
};
export default exportedObject;
