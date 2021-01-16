import { combineReducers } from "redux";
import { systemvar } from "./systemvar";
import { categories } from "./catgories";
import { slider } from "./slider";
import { products } from "./products";
import { frontreviews } from "./frontreviews";
import { cart } from "./cart";
import { wishlist } from "./wishlist";
import { auth } from "./auth";
const allReducers = combineReducers({
  systemvar,
  categories,
  slider,
  products,
  frontreviews,
  cart,
  wishlist,
  auth,
});
//using es6 objects feature
export default allReducers;
