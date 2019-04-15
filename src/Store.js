import {createStore, compose, applyMiddleware} from "redux";
import { combineReducers } from "redux-immutable";
import thunk from "redux-thunk";
import {reducer as headerReducer} from "./components/header";
import {reducer as homeReducer} from "./page/home";


const reducers = combineReducers({
  header: headerReducer,
  home: homeReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;