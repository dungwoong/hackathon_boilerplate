export const NEXT_SERVER_URL = 'http://localhost:3000';

export const LOGIN_URL = NEXT_SERVER_URL + '/api/auth/login';

export const CHECK_TOKEN_URL = NEXT_SERVER_URL + '/api/auth/checktoken';

export const SIGNUP_URL = NEXT_SERVER_URL + '/api/auth/signup';

export const FLASK_APP_URL = process.env.FLASK_URL || 'http://localhost:5000';

export const PROXY_URL = NEXT_SERVER_URL + '/api/proxy';