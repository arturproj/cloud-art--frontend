import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../feature/Authentication/reducer";
import dashReducer from "../feature/Dashboard/reducer";
import loadReducer from "../feature/BackLoader/reducer";

import { toogleLonding } from "../feature/BackLoader/actionCreator";

import {
  loadCollection,
  loadPreview,
} from "../feature/Dashboard/actionCreator";

import { login, logout, auth } from "../feature/Authentication/actionCreator";

export const rootReducer = combineReducers({
  auth: authReducer,
  dash: dashReducer,
  app: loadReducer,
});

export const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.dash,
  ...state.app,
});

export const mapDispatchToProps = (dispatch) => ({
  toogleLonding: () => {
    dispatch(toogleLonding());
  },
  login: (user) => {
    dispatch(login(user));
  },
  logout: () => {
    dispatch(logout());
  },
  serializeForm: (currentTarget) => {
    return new FormData(currentTarget);
  },
  loadCollection: (images) => {
    dispatch(loadCollection({ images }));
  },
  loadPreview: (image) => {
    dispatch(loadPreview(image));
  },
});

export default configureStore({ reducer: rootReducer });
