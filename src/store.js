import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./component/redux/CombineReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
