import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import {
    CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import footballImg from "../assets/swiper/football.jpg";
import helmetImg from "../assets/swiper/helmet.jpg";
import rugbyballImg from "../assets/swiper/rugbyball.jpg";
import tenisballImg from "../assets/swiper/tenisball.jpg";
import english_willow_bat from "../assets/swiper/english_willow_bat.jpg";

const HomeSwiper = () => {
    return (
        <div>
            <CarouselProvider
                naturalSlideHeight={40}
                naturalSlideWidth={100}
                totalSlides={5}
            >
                <Slider>
                    <Slide index={1}><Image src={footballImg} className='img-fluid' /></Slide>
                    <Slide index={2}><Image src={english_willow_bat} className='img-fluid' /></Slide>
                    <Slide index={0}><Image src={tenisballImg} className='img-fluid' hasMasterSpinner={false}></Image></Slide>
                    <Slide index={3}><Image src={rugbyballImg} className='img-fluid' /></Slide>
                    <Slide index={4}><Image src={helmetImg} className='img-fluid' /></Slide>

                </Slider>

                <ButtonBack className='btn btn-outline-light rounded-circle border border-2 
                    position-absolute top-50 start-0 m-1'>
                    <ChevronLeft className='' />
                </ButtonBack>
                <ButtonNext className='btn btn-outline-light rounded-circle border border-2
                    position-absolute top-50 end-0 m-1'>
                    <ChevronRight />
                </ButtonNext>
                <DotGroup className='position-absolute bottom-0 end-50'/>

            </CarouselProvider>
        </div>
    )
}

export default HomeSwiper
