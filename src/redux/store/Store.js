import { createStore } from "redux";
import { reducer } from "../ProductReducer/reducer";

export const store = createStore(reducer,{})