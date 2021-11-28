import { createReducer } from "@reduxjs/toolkit";
import { toogleLonding } from "./actionCreator";

const initialState = {
  onLoading: false,
};

const loadReducer = createReducer(initialState, (builder) => {
  builder.addCase(toogleLonding, (state) => ({
    ...state,
    onLoading: state.onLoading ? false : true,
  }));
});

export const loadingStateToProps = (state) => ({
  ...state.app,
});

export const loadingDispatchToProps = (dispatch) => ({
  toogleLonding: () => {
    dispatch(toogleLonding());
  },
});

export default loadReducer;
