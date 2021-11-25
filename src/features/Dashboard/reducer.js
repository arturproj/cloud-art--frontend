import { createAction, createReducer } from "@reduxjs/toolkit";
import {
  LOAD_IMAGE,
  LOAD_ALBUM_IMAGES,
  SET_IMAGE,
  DELETE_IMAGE,
} from "../../share/constants/ActionTypes";

export const loadImage = createAction(LOAD_IMAGE);
export const loadImages = createAction(LOAD_ALBUM_IMAGES);
export const setImage = createAction(SET_IMAGE);
export const delImage = createAction(DELETE_IMAGE);

const initialState = {
  currentImage: null,
  collection: [],
};

const dashbordReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadImage, (state, action) => ({
      ...state,
      currentImage: state.collection.filter(
        (img) => img.id === action.payload.id
      ),
    }))
    .addCase(loadImages, (state, action) => ({
      ...state,
      collection: [...action.payload.images],
    }))
    .addCase(setImage, (state, action) => {
      let { collection } = state;
      collection.push(action.payload);
      return { ...state, collection };
    })
    .addCase(delImage, (state, action) => {
      let { collection, currentImage } = state;
      const toDelete = new Set([action.payload.id]);
      collection = state.collection.filter((img) => !toDelete.has(img.id));
      if (state.currentImage.id === action.payload.id) {
        currentImage = collection[0];
      }
      return { ...state, collection, currentImage };
    });
});

export const dashStateToProps = (state) => ({
  ...state.auth,
  ...state.dash,
});

export const dashDispatchToProps = (dispatch) => ({});

export default dashbordReducer;
