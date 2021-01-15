import * as actions from "../actions/actionTypes";
let initialState = {};
export const categories = (state = initialState, action) => {
  switch (action.type) {
    case actions.CATEGORIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
