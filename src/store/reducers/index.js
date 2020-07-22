import { combineReducers } from "redux";
import counter from "./counter";
import result from "./result";

const rootReducer = combineReducers({
  ctr: counter,
  res: result,
});

export default rootReducer;
