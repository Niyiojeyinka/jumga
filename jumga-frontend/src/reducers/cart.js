import * as actions from "../actions/actionTypes";
import addToCartArray from "../helpers/addtocart";

let initialState = { products: [] };
export const cart = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      let newproducts = addToCartArray(
        action.payload.product,
        state.products,
        action.payload.no,
        action.payload.override
      );
      return { products: [...newproducts] };
    case actions.REMOVE_FROM_CART:
      let myproducts = state.products.filter((product) => {
        return product.id != action.payload.id;
      });
      return {
        products: [...myproducts],
      };
    //  return { products: [...action.payload] };
    default:
      return state;
  }
};
