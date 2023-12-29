function getLocalRefreshToken() {
  const token = JSON.parse(localStorage.getItem('persist:auth'));
  return token?.refreshToken?.slice(1, -1);
}

function getLocalAccessToken() {
  const token = JSON.parse(localStorage.getItem('persist:auth'));
  return token?.accessToken?.slice(1, -1);
}

function updateLocalAccessToken(accessToken) {
  let auth = JSON.parse(localStorage.getItem('persist:auth'));
  auth.accessToken = `"${accessToken}"`;
  localStorage.setItem('persist:auth', JSON.stringify(auth));
}
const exportedObject = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
};
export default exportedObject;
