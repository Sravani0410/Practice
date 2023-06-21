import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import { appReducer } from "./AppReducer/reducer";
import { authReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({authReducer,appReducer});
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
