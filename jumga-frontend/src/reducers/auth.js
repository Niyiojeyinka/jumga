import * as actions from "../actions/actionTypes";
let initialState = {
  user: null,
  token: null,
  userType: "",
  loggedIn: false,
};
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNIN:
      return { ...state, ...action.payload };
    case actions.SIGNOUT:
      return { ...state, loggedIn: false, token: null };
    default:
      return state;
  }
};
