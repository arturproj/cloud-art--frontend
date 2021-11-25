import { createAction, createReducer } from "@reduxjs/toolkit";
import { LOGIN_USER, LOGOUT_USER } from "../../share/constants/ActionTypes";

export const login = createAction(LOGIN_USER);
export const logout = createAction(LOGOUT_USER);

const initialState = {
  isAuthenticated: false,
  user: { email: null, token: null },
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => ({
      ...state,
      isAuthenticated: true,
      user: { email: action.payload.email, token: action.payload.token },
    }))
    .addCase(logout, (state) => ({
      ...state,
      isAuthenticated: false,
      user: { email: null, token: null },
    }));
});

export const loginStateToProps = (state) => ({
  ...state.auth,
});

export const loginDispatchToProps = (dispatch) => ({
  login: (user) => {
    dispatch(login(user));
  },
  logout: () => {
    dispatch(logout());
  },
});

export default authReducer;
