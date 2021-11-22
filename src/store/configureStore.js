import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


import authReducer from "../reducers/auth";

const storeGenerator =()=>{
    const store = createStore(
        combineReducers({
            auth:authReducer
        }),
        composeWithDevTools(applyMiddleware(thunk)));

    return store;
};

export default storeGenerator;
