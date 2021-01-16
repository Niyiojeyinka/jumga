import * as actions from "../actions/actionTypes";
let initialState = { products: [] };
export const cart = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return { products: [action.payload, ...state.products] };
    case actions.REMOVE_FROM_CART:
      return { products: [action.payload, ...state.products] };
    default:
      return state;
  }
};