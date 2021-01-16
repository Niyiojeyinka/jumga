import * as actions from "./actionTypes";

const signin = (data) => {
  return {
    type: actions.SIGNIN,
    payload: data,
  };
};
export const signout = (data) => {
  return {
    type: actions.SIGNOUT,
    payload: data,
  };
};
export default signin;
