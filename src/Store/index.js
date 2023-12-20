import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./reducers";
const RootReducers = combineReducers({
  auth: authReducer,
});

export const Store = createStore(RootReducers, applyMiddleware(thunk));
