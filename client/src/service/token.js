function getLocalRefreshToken() {
  const token = JSON.parse(localStorage.getItem('persist:auth'));
  return token?.refreshToken.slice(1, -1);
}

function getLocalAccessToken() {
  const token = JSON.parse(localStorage.getItem('persist:auth'));
  return token?.accessToken.slice(1, -1);
}

function updateLocalAccessToken(accessToken) {
  console.log(
    '🚀 ~ file: token.js:12 ~ updateLocalAccessToken ~ accessToken:',
    accessToken
  );
  let auth = JSON.parse(localStorage.getItem('persist:auth'));
  console.log('🚀 ~ file: token.js:14 ~ updateLocalAccessToken ~ auth:', auth);
  auth.accessToken = `"${accessToken}"`;
  auth.isLoggedIn = 'true';
  localStorage.setItem('persist:auth', JSON.stringify(auth));
  let auth2 = JSON.parse(localStorage.getItem('persist:auth'));
  console.log(
    '🚀 ~ file: token.js:16 ~ updateLocalAccessToken ~ auth2:',
    auth2
  );
}
const exportedObject = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
};
export default exportedObject;
