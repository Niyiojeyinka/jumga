import * as actions from "../actions/actionTypes";
let initialState = { recents: [], random: [] };
export const products = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_RANDOM_PRODUCT:
      return { ...state, random: action.payload };
    case actions.ADD_RECENT_PRODUCT:
      return { ...state, recents: action.payload };
    default:
      return state;
  }
};
