import * as actionTypes from "./actionTypes";

export const saveResult = (result) => {
  return { type: actionTypes.STORE_RESULT, result };
};

// Mimic async call
export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 4000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id,
  };
};
