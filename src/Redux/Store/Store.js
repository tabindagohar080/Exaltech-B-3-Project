import {legacy_createStore,combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { FormOneReducer } from "../FormsComp/ReducersComp/FormOneReducer";
import { FormTwoReducer } from "../FormsComp/ReducersComp/FormTwoReducer";
import { FormThreeReducer } from "../FormsComp/ReducersComp/FormThreeReducer";

export const configureStore = () =>{
    return legacy_createStore(
        combineReducers({FormOneReducer, FormTwoReducer, FormThreeReducer}),
        composeWithDevTools()
      );
};









