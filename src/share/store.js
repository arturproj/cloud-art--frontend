import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/Account/reducer";
import dashReducer from "../features/Dashboard/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  dash: dashReducer,
});

export default configureStore({ reducer: rootReducer });
