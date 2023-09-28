import { combineReducers } from "redux";
import imagesReducer from "./reducer";

const rootReducer = combineReducers({
  images: imagesReducer
});

export default rootReducer;
