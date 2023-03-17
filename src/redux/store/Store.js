import { applyMiddleware, createStore } from "redux";
import { reducer } from "../ProductReducer/reducer";
import thunk from 'redux-thunk'

export const store = createStore(reducer, applyMiddleware(thunk))