import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
