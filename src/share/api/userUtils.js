/**
 * Save in localStorage user data
 * @memberof authUser()
 * @param {object} result
 * @returns {object} result.data
 */
export const setStorage = ({ data }) => {
  if (data.success) {
    localStorage.setItem("email", data.email);
    localStorage.setItem("token", data.token);
    console.log(data);
  } else {
    console.error(data);
  }

  return data;
};

/**
 * Read user data from localStorage
 * @returns {object} user
 */
export const getStorage = () => ({
  email: localStorage.get("email"),
  token: localStorage.get("token"),
  remember: localStorage.get("remember"),
});
