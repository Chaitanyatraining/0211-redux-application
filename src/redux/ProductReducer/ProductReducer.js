import { ACTION_TYPE } from "../types/ActionType";


const initialState = {
    products:[],
    cartData:[],
}

export const productReducer = (state= initialState, action)=>{
    switch(action.type){
        case ACTION_TYPE.ADD_TO_CART:
            return {...state, cartData:[...state.cartData, action.payload]}
            break;

        default:
            return state;
    }
}