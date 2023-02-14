import React from 'react'
import '../styles/belowSwiperSection.css'

const HoverImg = (props) => {
    return (
        <div className="img-wrapper">
            <img className="fit-image hover-zoom" src={props.imgSrc} />
            <div className="img-overlay">
                <div className='container text-white bg-dark w-25'>
                    <div className='row d-flex justify-content-center p-2'>
                        {props.overlayTitle}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverImg