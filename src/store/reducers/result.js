import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

const storeResult = (state, action) => {
  const results = state.results.concat({
    id: new Date(),
    value: action.result,
  });

  return updateObject(state, { results });
};

const deleteResult = (state, action) => {
  const results = state.results.filter((result) => result.id !== action.id);

  return updateObject(state, { results });
};

const result = (state = initialState, action) => {
  if (action.type === actionTypes.STORE_RESULT) {
    return storeResult(state, action);
  }

  if (action.type === actionTypes.DELETE_RESULT) {
    return deleteResult(state, action);
  }

  return state;
};

export default result;
