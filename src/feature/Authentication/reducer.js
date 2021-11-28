import { createReducer } from "@reduxjs/toolkit";
import { login, logout, auth } from "./actionCreator";
import { setStorage, getStorage, clearStorage } from "../../share/api/helpers";

const validateReducer = () => {
  let user = getStorage();

  if (user.email && user.token) {
    console.log("validateReducer", user);
    return {
      isAuthenticated: true,
      user,
    };
  }

  return {
    isAuthenticated: false,
    user: null,
  };
};

const initialState = validateReducer();

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        user: setStorage(action.payload.data),
      };
    })
    .addCase(logout, (state) => ({
      ...state,
      isAuthenticated: false,
      user: clearStorage(),
    }));
});

export const authStateToProps = (state) => ({
  ...state.auth,
});

export const authDispatchToProps = (dispatch) => ({
  login: (user) => {
    dispatch(login(user));
  },
  logout: () => {
    dispatch(logout());
  },
  serializeForm: (currentTarget) => new FormData(currentTarget),
});

export default authReducer;
