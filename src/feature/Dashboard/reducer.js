import { createReducer } from "@reduxjs/toolkit";
import { LOGIN_USER, LOGOUT_USER } from "../../share/constants/ActionTypes";
import { loadCollection, loadPreview } from "./actionCreator";

const initialState = {
  collection: [],
  preview: null,
};

const dashReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCollection, (state, action) => {
      return {
        ...state,
        collection: [...action.payload.images],
      };
    })
    .addCase(loadPreview, (state, action) => ({
      ...state,
      preview: { ...action.payload.preview },
    }));
});

export const dashStateToProps = (state) => ({
  ...state.dash,
});

export const dashDispatchToProps = (dispatch) => ({
  loadCollection: (images) => {
    dispatch(loadCollection(images));
  },
  loadPreview: (image) => {
    dispatch(loadPreview(image));
  },
});

export default dashReducer;
