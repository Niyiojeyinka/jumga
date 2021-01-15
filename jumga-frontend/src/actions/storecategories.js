import * as actions from "./actionTypes";

const storecategories = (data) => {
  return {
    type: actions.CATEGORIES,
    payload: data,
  };
};

export default storecategories;
