import * as actions from "../actions/actionTypes";
let initialState = [];
export const frontreviews = (state = initialState, action) => {
  switch (action.type) {
    case actions.FRONTREVIEWS:
      return action.payload;
    default:
      return state;
  }
};
