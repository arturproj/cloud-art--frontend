import { createReducer } from "@reduxjs/toolkit";
import { login, logout, auth } from "./actionCreator";
import { setStorage, getStorage, clearStorage } from "../../share/api/helpers";
import { checkToken } from "../../share/api/cloud_art_api";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => ({
      ...state,
      isAuthenticated: true,
      user: action.payload,
    }))
    .addCase(logout, (state) => ({
      ...state,
      isAuthenticated: false,
      user: null,
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
    clearStorage();
    dispatch(logout());
  },
  serializeForm: (currentTarget) => new FormData(currentTarget),
});

export default authReducer;
