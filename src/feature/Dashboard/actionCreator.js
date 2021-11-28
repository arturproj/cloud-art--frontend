import { createAction } from "@reduxjs/toolkit";
import * as action from "../../share/constants/ActionTypes";

export const loadCollection = createAction(action.LOAD_ALBUM_IMAGES);
export const loadPreview = createAction(action.LOAD_IMAGE);
export const setImage = createAction(action.SET_IMAGE);
export const onLoading = createAction(action.LOADING);
