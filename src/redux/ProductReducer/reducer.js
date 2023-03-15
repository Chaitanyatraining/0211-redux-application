import {combineReducers} from "redux"
import { productReducer } from "./ProductReducer"

export const reducer = combineReducers({
    productsData : productReducer,
})