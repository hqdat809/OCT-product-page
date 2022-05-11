import { ADD_CART, DELETE_CART, TOGGLE_MODAL } from "./constant";

export const addCart = payload => ({
    type: ADD_CART,
    payload
})

export const deleteCart = payload => ({
    type: DELETE_CART,
    payload
})

export const toggleModal = payload => ({
    type: TOGGLE_MODAL,
    payload
})