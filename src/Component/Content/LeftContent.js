import React, { useState, useRef } from 'react'
import { toggleModal } from '../../store/actions'

import { Swiper, SwiperSlide } from "swiper/react";

import { useStore } from "../../store/hooks"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";


function LeftContent() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [state, dispatch] = useStore()

    const productInfor = state.product

    const handleOpenModal = () => {

        dispatch(toggleModal(true))
    }

    return (
        <div className='left-content'>
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
                onClick={handleOpenModal}
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
    )
}

export default LeftContent
