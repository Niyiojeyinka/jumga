import * as actions from "./actionTypes";

const addtowishlist = (data) => {
  return {
    type: actions.ADD_TO_WISHLIST,
    payload: data,
  };
};
export const removefromwishlist = (data) => {
  return {
    type: actions.REMOVE_FROM_WISHLIST,
    payload: data,
  };
};
export default addtowishlist;
