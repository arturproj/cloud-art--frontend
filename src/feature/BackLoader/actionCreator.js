import { createAction } from "@reduxjs/toolkit";
import * as action from "../../share/constants/ActionTypes";

export const toogleLonding = createAction(action.LOADING);
