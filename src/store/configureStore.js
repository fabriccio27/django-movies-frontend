import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import expensesReducer from "../reducers/expenses";
import pruebasReducer from "../reducers/pruebas";
//import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";



//esto de aca abajo hace que cuando importe el default de este archivo, obtenga el store ya creado y configurado con sus reducers
export default (()=>{
    const store = createStore(
        combineReducers({
            expenses:expensesReducer,
            //filter:filtersReducer,
            pruebas:pruebasReducer,
            auth:authReducer
        }),
        composeWithDevTools(applyMiddleware(thunk)));

    return store;
})