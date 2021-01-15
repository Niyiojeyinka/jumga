import * as actions from "../actions/actionTypes";
let initialState = {};
export const slider = (state = initialState, action) => {
  switch (action.type) {
    case actions.SLIDER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
