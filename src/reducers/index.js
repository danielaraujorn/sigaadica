import { resultsReducer } from "./resultsReducer";
import { combineReducers } from "redux";
export default combineReducers({
  results: resultsReducer
});
