import axios from "axios";
import { setStorage } from "./helpers";

export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);

const { REACT_APP_API_URL } = process.env;

const setupHeadersJSON = () => {
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";
};

/**
 * Call promise to api register
 * @param {object} params
 * @returns {object} response
 */
export const addUser = async (params) => {
  setupHeadersJSON();
  const response = await post(`${REACT_APP_API_URL}/register`, params);
  console.log(response);
  return response.data.success;
};

/**
 * Call promise to api login
 * @param {object} params
 * @returns {object} response
 */
export const authUser = async (params) => {
  setupHeadersJSON();
  console.log("authUser", params);
  localStorage.setItem("conditions", params.checkbox);
  const response = await post(`${REACT_APP_API_URL}/login`, params).then(
    (res) => res.data
  );
  console.log("authUser response", response);
  if (response.success) {
    setStorage(response);
  }

  return response;
};

/**
 * Call promise to api verifi token
 * @param {object} params
 * @returns {object} response
 */
export const checkToken = async (token) => {
  setupHeadersJSON();
  const response = await post(`${REACT_APP_API_URL}/user/token`, {
    token,
  }).then((res) => res.data);
  console.log("checkToken", response);
  return response;
};

const setAutorisation = () => {
  axios.defaults.headers.common["Authorization"] = `Dixeed token`;
};

export const uploadImage = async (file_params) => {
  setupHeadersJSON();
  const response = await post(
    `${REACT_APP_API_URL}/image/upload`,
    file_params
  ).then((res) => res.data);

  return response;
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
