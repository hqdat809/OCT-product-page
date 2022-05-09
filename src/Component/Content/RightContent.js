import React, { useEffect, useLayoutEffect, useState } from 'react'
import plus from "../../assets/images/icon-plus.svg"
import minus from "../../assets/images/icon-minus.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useStore } from "../../store/hooks"
import { addCart } from "../../store/actions"

function RightContent() {
    const [count, setCount] = useState(1)
    const [state, dispatch] = useStore()

    const productInfor = state.product

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    useLayoutEffect(() => {
        if (count < 1) {
            setCount(1)
        }
    }, [count])

    const handleAddCart = () => {
        dispatch(addCart({ productInfor, count }))
    }


    return (
        <div className='right-content'>
            <div className='product-infor'>
                <h3 className='brand'>
                    {productInfor.brand}
                </h3>
                <h1 className='title-product'>
                    {productInfor.name}
                </h1>
                <p className='description-product'>
                    {productInfor.description}
                </p>
                <div className='container-prices-product'>
                    <h1 className='last-price'>
                        ${productInfor.price}
                        <span className='discount-price'>{productInfor.discount}%</span>
                    </h1>
                    <h3 className='old-price'>
                        $250.00
                    </h3>
                </div>
            </div>
            <div className='product-select'>
                <div className='product-select-quantity'>
                    <span onClick={decreaseCount}><img src={minus} style={{ padding: "0 10px" }}></img></span>
                    <span className="quantity-select" style={{ padding: "0 30px" }}>{count}</span>
                    <span onClick={increaseCount}><img src={plus} style={{ padding: "0 10px" }}></img></span>
                </div>
                <button
                    className='product-select-add'
                    onClick={handleAddCart}
                >
                    <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "10px" }} />
                    Add to cart
                </button>
            </div>
        </div >
    )
}

export default RightContent
