export const IsLoggedIn = (): boolean => {
  return window.sessionStorage['access_token'] !== undefined;
};