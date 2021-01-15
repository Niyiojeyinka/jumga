import * as actions from "./actionTypes";

const storeslider = (data) => {
  return {
    type: actions.SLIDER,
    payload: data,
  };
};

export default storeslider;
