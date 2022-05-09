import { ADD_CART, EDIT_CART, DELETE_CART } from "./constant";

export const addCart = payload => ({
    type: ADD_CART,
    payload
})

export const deleteCart = payload => ({
    type: DELETE_CART,
    payload
})

export const editCart = payload => ({
    type: EDIT_CART,
    payload
})