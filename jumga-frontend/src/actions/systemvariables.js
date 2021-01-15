import * as actions from "./actionTypes";

const systemVariables = (data) => {
  return {
    type: actions.SYSTEMVAR,
    payload: data,
  };
};

export default systemVariables;
