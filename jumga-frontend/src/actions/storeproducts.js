import * as actions from "./actionTypes";

const storerecentproducts = (data) => {
  return {
    type: actions.ADD_RECENT_PRODUCT,
    payload: data,
  };
};
export const storerandomproducts = (data) => {
  return {
    type: actions.ADD_RANDOM_PRODUCT,
    payload: data,
  };
};
export default storerecentproducts;
