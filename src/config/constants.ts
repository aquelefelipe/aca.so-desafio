const storagePrefix = '@LOCAL_STORAGE/';
const ID_TOKEN = `${storagePrefix}ID_TOKEN`;
const ACCESS_TOKE = `${storagePrefix}ACCESS_TOKEN`;
const REFRESH_TOKEN = `${storagePrefix}REFRESH_TOKEN`;

const baseURL = 'https://api.staging.aca.so';

const URLRequest = {
  SIGN_UP: '/auth/sign-up',
  LOGIN: '/auth/login',
  CONFIRM_EMAIL: '/auth/confirm-sign-up',
};

const handleStorageIdToken = (idToken: string) =>
  localStorage.setItem(ID_TOKEN, idToken);
const handleStorageAccessToken = (accessToken: string) =>
  localStorage.setItem(ACCESS_TOKE, accessToken);
const handleStorageRefreshToken = (refreshToken: string) =>
  localStorage.setItem(REFRESH_TOKEN, refreshToken);

export {
  storagePrefix,
  ID_TOKEN,
  ACCESS_TOKE,
  REFRESH_TOKEN,
  baseURL,
  URLRequest,
  handleStorageAccessToken,
  handleStorageRefreshToken,
  handleStorageIdToken,
};
