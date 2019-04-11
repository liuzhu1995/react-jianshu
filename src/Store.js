import {createStore, combineReducers} from "redux";
import {reducer as headerReducer} from "./components/header";


const reducer = combineReducers({
  header: headerReducer
});
const store = createStore(reducer);

export default store;