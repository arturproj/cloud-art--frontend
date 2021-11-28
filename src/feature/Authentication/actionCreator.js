import { createAction } from "@reduxjs/toolkit";
import * as action from "../../share/constants/ActionTypes";

export const login = createAction(action.LOGIN_USER);
export const logout = createAction(action.LOGOUT_USER);
export const auth = createAction(action.LOAD_USER);
