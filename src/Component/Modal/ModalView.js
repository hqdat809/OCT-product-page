import { useStore } from "../../store/hooks"
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useRef } from 'react'
import { toggleModal } from "../../store/actions";
import './ModalView.scss'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function ModalView() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [state, dispatch] = useStore()

    const productInfor = state.product
    console.log(state.toggleModal)

    const handleCloseModal = (e) => {
        dispatch(toggleModal(false))
    }

    return (
        <div
            className='modal'
            onClick={handleCloseModal}
        >
            <div
                className='modal-view'
                onClick={(e) => { e.stopPropagation() }}
            >
                <div className="icon-close-modal"
                    onClick={(e) => handleCloseModal(e)}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>

                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img src={productInfor.images.img1} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={productInfor.images.img2} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={productInfor.images.img3} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={productInfor.images.img4} alt="img" />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={productInfor.images.imgThumb1} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={productInfor.images.imgThumb2} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={productInfor.images.imgThumb3} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={productInfor.images.imgThumb4} alt="img" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}

export default ModalView
