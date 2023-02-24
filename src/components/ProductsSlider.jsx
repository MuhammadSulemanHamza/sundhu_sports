import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./productsSlider.css";

// import required modules
import { Pagination } from "swiper";

export default function ProductsSlider() {
    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
                480: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },

                768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }}
        >
            <SwiperSlide><ProductCard /></SwiperSlide>
            <SwiperSlide><ProductCard /></SwiperSlide>
            <SwiperSlide><ProductCard /></SwiperSlide>
            <SwiperSlide><ProductCard /></SwiperSlide>
            <SwiperSlide><ProductCard /></SwiperSlide>
            <SwiperSlide><ProductCard /></SwiperSlide>
            <SwiperSlide><ProductCard /></SwiperSlide>
            <SwiperSlide><ProductCard /></SwiperSlide>
            <SwiperSlide><ProductCard /></SwiperSlide>
        </Swiper>

    );
}
