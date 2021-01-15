import * as actions from "../actions/actionTypes";
let initialState = {};
export const systemvar = (state = initialState, action) => {
  switch (action.type) {
    case actions.SYSTEMVAR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
