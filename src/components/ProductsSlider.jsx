import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import ProductCard from '../components/ProductCard';
import {
    CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ProductsSlider = () => {
    return (
        <div className='my-product-carousel'>
            <CarouselProvider
                className='p-4'
                naturalSlideHeight={125}
                naturalSlideWidth={100}
                totalSlides={11}
                visibleSlides={4}
                step={2}
            >
                <Slider>
                    <Slide index={0}><ProductCard /></Slide>
                    <Slide index={1}><ProductCard /></Slide>
                    <Slide index={2}><ProductCard /></Slide>
                    <Slide index={3}><ProductCard /></Slide>
                    <Slide index={4}><ProductCard /></Slide>
                    <Slide index={5}><ProductCard /></Slide>
                    <Slide index={6}><ProductCard /></Slide>
                    <Slide index={7}><ProductCard /></Slide>
                    <Slide index={8}><ProductCard /></Slide>
                    <Slide index={9}><ProductCard /></Slide>
                    <Slide index={10}><ProductCard /></Slide>
                </Slider>

                <ButtonBack className='btn btn-outline-dark rounded-circle border border-2 border-dark
                    position-absolute top-50 start-0 m-1'>
                    <ChevronLeft className='' />
                </ButtonBack>
                <ButtonNext className='btn btn-outline-dark rounded-circle border border-2 border-dark
                    position-absolute top-50 end-0 m-1'>
                    <ChevronRight />
                </ButtonNext>
            </CarouselProvider>
        </div>
    )
}

export default ProductsSlider