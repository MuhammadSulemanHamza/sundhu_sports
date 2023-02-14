import React from 'react'
import ball_2 from '../assets/below_swiper/ball_2.jpeg'
import bats_section from '../assets/below_swiper/bats_section.png'
import english_willow_bat from '../assets/below_swiper/english_willow_bat.jpg'
import pratice_balls from '../assets/below_swiper/pratice_balls.jpeg'
import gloves from '../assets/below_swiper/gloves.jpeg'
import pads from '../assets/below_swiper/pads.jpeg'

import './styles/belowSwiperSection.css'
import HoverImg from './below_swiper_section/HoverImg'

const BelowSwiperSection = () => {
    return (
        <div className='container-fluid'>
            <div className="col pt-3 mx-3">
                <div className="row p-0">
                    <div className="col-md-3 col-6 p-2">
                        <HoverImg imgSrc={ball_2} overlayTitle="Balls"/>
                    </div>
                    <div className="col-md-3 col-6 p-2">
                        <HoverImg imgSrc={gloves} overlayTitle="Gloves"/>
                    </div>
                    <div className="col-md-6 col-12 p-2">
                        <HoverImg imgSrc={bats_section} overlayTitle="Bats"/>
                    </div>
                </div>
                <div className="row p-0">
                    <div className="col-md-6 col-12 p-2">
                        <HoverImg imgSrc={english_willow_bat} overlayTitle="Bats"/>
                    </div>
                    <div className="col-md-3 col-6 p-2">
                        <HoverImg imgSrc={pratice_balls} overlayTitle="Balls"/>
                    </div>
                    <div className="col-md-3 col-6 p-2">
                        <HoverImg imgSrc={pads} overlayTitle="Pads"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BelowSwiperSection