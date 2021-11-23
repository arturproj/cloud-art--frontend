import axios from "axios";

export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);

const { REACT_APP_API_URL } = process.env;

const setupHeadersJSON = () => {
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";
};

export const authUser = async (params) => {
  setupHeadersJSON();
  const result = await post(`${REACT_APP_API_URL}/register`, params);

  return result.data;
};


const setAutorisation = () => {
  axios.defaults.headers.common["Authorization"] = `Dixeed token`;
};

// export const getProducts = async () => {
//   setupHeadersJSON();
//   const result = await axios.get(`${REACT_APP_API_URL}/products`);
//   return result.data;
// };

// export const postBrief = async (param) => {
//   setupHeaders();
//   const result = await axios.post(`${REACT_APP_API_URL}/briefs`, param);
//   return result.data;
// };

// export const postProduct = async (param) => {
//   setupHeaders();
//   const result = await axios.post(`${REACT_APP_API_URL}/products`, param);
//   return result.data;
// };
