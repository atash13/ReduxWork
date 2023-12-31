import { combineReducers, legacy_createStore as createStore } from "redux";
import userReducer from "./reducers/UserReducer";


const defaultReducer=combineReducers({
    user: userReducer
});

const store = createStore(defaultReducer);

export default store;