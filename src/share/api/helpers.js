/**
 * Save in localStorage user data
 * @memberof authUser()
 * @param {object} result
 * @returns {object} result.data
 */
export const setStorage = (data) => {
  console.log("setStorage", data);
  if (data.success) {
    localStorage.setItem("email", data.email);
    localStorage.setItem("token", data.token);
  }

  return data;
};

/**
 * Read user data from localStorage
 * @returns {object} user
 */
export const getStorage = () => ({
  email: localStorage.getItem("email"),
  token: localStorage.getItem("token"),
  remember: localStorage.getItem("remember"),
  conditions: localStorage.getItem("conditions"),
});

export const clearStorage = () => {
  localStorage.clear();
  return {
    email: localStorage.getItem("email"),
    token: localStorage.getItem("token"),
    remember: localStorage.getItem("remember"),
    conditions: localStorage.getItem("conditions"),
  };
};
