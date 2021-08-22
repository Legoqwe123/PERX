export const API_URL = "https://murmuring-tor-81614.herokuapp.com/api";

export const createUrlAPI = (path) => {
  if (Array.isArray(path)) {
    return path.reduce((acc, item) => acc + item, API_URL);
  }

  return API_URL + path;
};

export const createUrlForStatic = (path) => {
  const indexLastSlash = API_URL.lastIndexOf("/");
  const urlWithoutLastSlash = API_URL.slice(0, indexLastSlash);

  return urlWithoutLastSlash + path;
};
