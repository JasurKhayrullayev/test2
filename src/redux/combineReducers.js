import { combineReducers } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  login: reducer
})

export default rootReducer