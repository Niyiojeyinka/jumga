import * as actions from "./actionTypes";

const addtocart = (data) => {
  return {
    type: actions.ADD_TO_CART,
    payload: data,
  };
};
export const removefromcart = (data) => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: data,
  };
};
export default addtocart;
