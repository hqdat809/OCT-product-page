import { ADD_CART, EDIT_CART, DELETE_CART } from "./constant";
import img1 from "../assets/images/image-product-1.jpg"
import img2 from "../assets/images/image-product-2.jpg"
import img3 from "../assets/images/image-product-3.jpg"
import img4 from "../assets/images/image-product-4.jpg"
import imgThumb1 from "../assets/images/image-product-1-thumbnail.jpg"
import imgThumb2 from "../assets/images/image-product-2-thumbnail.jpg"
import imgThumb3 from "../assets/images/image-product-3-thumbnail.jpg"
import imgThumb4 from "../assets/images/image-product-4-thumbnail.jpg"


const initState = {
    carts: [],
    product: {
        images: {
            img1,
            img2,
            img3,
            img4,
            imgThumb1,
            imgThumb2,
            imgThumb3,
            imgThumb4,
        },
        brand: 'SNEAKER COMPANY',
        name: 'Fall Limited Edition Sneakers',
        price: (125).toFixed(2),
        discount: '50',
        description: "These lose-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        case DELETE_CART:
            console.log(action.payload)
            const newState = [...state.carts]
            newState.splice(action.payload, 1)
            return {
                ...state,
                carts: newState
            }
        default:
            throw new Error('invalid ')
    }
}

export { initState }
export default reducer