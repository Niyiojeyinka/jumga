import * as actions from "../actions/actionTypes";
import removeFromProducts from "../helpers/removefromproducts";
let initialState = { products: [] };
export const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TO_WISHLIST:
      return { products: [action.payload, ...state.products] };
    case actions.REMOVE_FROM_WISHLIST:
      return {
        products: removeFromProducts(action.payload.id, state.products),
      };
    default:
      return state;
  }
};
