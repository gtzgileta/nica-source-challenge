import jwt from 'jsonwebtoken';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

//Generate an access token and a refresh token for this database user
function jwtTokens({ id, user_email }): Tokens {
  const user = { id, user_email}; 
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5h' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '5m' });
  return ({ accessToken, refreshToken });
}

export { jwtTokens };