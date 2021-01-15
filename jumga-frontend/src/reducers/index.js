import { combineReducers } from "redux";
import { systemvar } from "./systemvar";
import { categories } from "./catgories";
import { slider } from "./slider";
const allReducers = combineReducers({ systemvar, categories, slider });
//using es6 objects feature
export default allReducers;
