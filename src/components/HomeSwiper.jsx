// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import footballImg from "../assets/swiper/football.jpg";
import helmetImg from "../assets/swiper/helmet.jpg";
import rugbyballImg from "../assets/swiper/rugbyball.jpg";
import tenisballImg from "../assets/swiper/tenisball.jpg";
import shoe_footballImg from "../assets/swiper/shoe_football.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Navigation } from "swiper";
import { Pagination } from "swiper";

export default function HomeSwiper() {
    return (
        <div className="container-fluid">
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide><img className='img-fluid' src={footballImg} /></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src={helmetImg} /></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src={rugbyballImg} /></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src={tenisballImg} /></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src={shoe_footballImg} /></SwiperSlide>

            </Swiper>
        </div>
    );
}