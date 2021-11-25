import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/Account/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
});

export default configureStore({ reducer: rootReducer });
