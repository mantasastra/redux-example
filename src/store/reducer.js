import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  results: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === actionTypes.DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === actionTypes.ADD) {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  if (action.type === actionTypes.SUBTRACT) {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  }

  if (action.type === actionTypes.STORE_RESULT) {
    return {
      ...state,
      results: state.results.concat({ id: new Date(), value: state.counter }),
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
