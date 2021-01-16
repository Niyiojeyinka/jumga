import * as actions from "./actionTypes";

const storefrontreviews = (data) => {
  return {
    type: actions.FRONTREVIEWS,
    payload: data,
  };
};

export default storefrontreviews;
