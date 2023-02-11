import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./productsSlider.css";
import ProductCard from "./ProductCard";

export default function ProductsSlider() {
    return (
        <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
        </Swiper>

    );
}
