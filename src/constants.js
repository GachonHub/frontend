export const API_BASE_URL = 'https://gachonhub-server.herokuapp.com';

export const FRONT_BASE_URL = 'https://gachonhub.herokuapp.com';
export const OAUTH_REDIRECT_URL = FRONT_BASE_URL + "/auth";

// export const API_BASE_URL = "http://localhost:8000";
// export const FRONT_BASE_URL = "http://localhost:8080";
// export const OAUTH_REDIRECT_URL = "http://localhost:8080/auth";

export const GITHUB_OAUTH_URI = API_BASE_URL + "/oauth2/authorize/github?redirect_uri=" + OAUTH_REDIRECT_URL;

export const AUTHORIZATION = "AUTHORIZATION";
export const REFRESH = "REFRESH";
