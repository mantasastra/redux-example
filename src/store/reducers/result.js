import * as actionTypes from "../actions/actionTypes";

const initialState = {
  results: [],
};

const result = (state = initialState, action) => {
  if (action.type === actionTypes.STORE_RESULT) {
    return {
      ...state,
      results: state.results.concat({ id: new Date(), value: action.result }),
    };
  }

  if (action.type === actionTypes.DELETE_RESULT) {
    return {
      ...state,
      results: state.results.filter((result) => result.id !== action.resultId),
    };
  }

  return state;
};

export default result;
