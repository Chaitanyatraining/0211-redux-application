import { ACTION_TYPE } from "../types/ActionType";

export const addToCart = (product)=>{
    return { type:ACTION_TYPE.ADD_TO_CART, payload:product }
}

export const removeFromCart = (id)=>{
    return{
        type:ACTION_TYPE.REMOVE_FROM_CART,
        payload:id
    }
}