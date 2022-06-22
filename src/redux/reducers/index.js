import { combineReducers } from "redux";
import scoreReducer from "./score";
import stylesReducer from "./styles";

const rootReducer = combineReducers({
  styles: stylesReducer,
  score: scoreReducer,
});

export default rootReducer;
