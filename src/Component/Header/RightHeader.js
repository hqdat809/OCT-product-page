import React, { useEffect } from 'react'
import { useStore } from "../../store/hooks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteCart } from "../../store/actions"


function RightHeader() {
    const [state, dispatch] = useStore()
    let modalCart = null
    useEffect(() => {
        modalCart = document.querySelector('.modal-cart')
    })

    const handleToggleCart = () => {
        if (modalCart) {
            modalCart.classList.toggle('active')
        }
    }


    const productsCart = state.carts

    if (productsCart) {
        productsCart.map(product => {
            product.total = product.count * product.productInfor.price
        })
    }

    const handleDeleteProduct = (product) => {
        dispatch(deleteCart(product))
    }

    return (
        <div className='right-header'>
            <div
                className='right-header-cart'
                onClick={handleToggleCart}
            >
                <span className='number-item-cart'>{productsCart.length}</span>
            </div>
            <div className='right-header-avatar'></div>
            <div className='modal-cart'>
                <span className='arrow-up'></span>
                <h1 className='header-cart'>Cart</h1>
                {productsCart !== null && productsCart.map((item, index) => (
                    <>
                        <div
                            className='wrapper-product-cart'
                            key={index}
                        >
                            <div className='wrapper-img-cart'>
                                <img src={item.productInfor.images.img1} alt='img product in cart' />
                            </div>
                            <div className='infor-product-cart'>
                                <p className='name-cart-product'>
                                    {item.productInfor.name}
                                </p>
                                <div className='price-product-cart'>
                                    <p>${item.productInfor.price} x {item.count}</p> <h1>${item.total.toFixed(2)}</h1>

                                </div>
                            </div>
                            <span
                                className='btn-delete-cart'
                                onClick={() => handleDeleteProduct(index)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                        </div>
                    </>
                ))

                }
                {/* <img src='' alt='img product in cart' />
                <div className='infor-product-cart'>
                    <p className='name-cart-product'></p>
                    <div className='price-product-cart'>
                        <p>$</p>
                        x
                        <p>{productsCart[0].count}</p>
                        <h4 className='total-price'></h4>
                    </div>
                </div> */}
            </div>
        </div >
    )
}

export default RightHeader
