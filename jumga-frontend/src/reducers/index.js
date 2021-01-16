import { combineReducers } from "redux";
import { systemvar } from "./systemvar";
import { categories } from "./catgories";
import { slider } from "./slider";
import { products } from "./products";
import { frontreviews } from "./frontreviews";
const allReducers = combineReducers({
  systemvar,
  categories,
  slider,
  products,
  frontreviews,
});
//using es6 objects feature
export default allReducers;
