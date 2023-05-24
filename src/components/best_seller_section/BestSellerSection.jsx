import React from 'react'
import ProductsSlider from '../ProductsSlider'

const BestSellerSection = () => {
    return (
        <div>
            <div className='mx-auto my-4 text-center'>
                <div className='h4 horizontal-line'>Best Seller Products</div>
            </div>
            <div className='mx-auto my-4 text-center'>
                <ul className='d-flex justify-content-center list-unstyled'>
                    <li className='mx-4'>
                        <a className='menu-item hover-underline-animation text-decoration-none' href="">
                            Bats
                        </a></li>
                    <li className='mx-4'>
                        <a className='menu-item hover-underline-animation text-decoration-none' href="">Balls</a>
                    </li>
                    <li className='mx-4'>
                        <a className='menu-item hover-underline-animation text-decoration-none' href="">Gloves</a>
                    </li>
                    <li className='mx-4'>
                        <a className='menu-item hover-underline-animation text-decoration-none' href="">Pads</a>
                    </li>
                </ul>
            </div>
            <ProductsSlider />
        </div>
    )
}

export default BestSellerSection