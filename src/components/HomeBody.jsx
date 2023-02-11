import React from 'react'
import ProductCard from './ProductCard';

const HomeBody = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4"><ProductCard/></div>
                <div className="col-12 col-sm-6 col-md-4"><ProductCard/></div>
                <div className="col-12 col-sm-6 col-md-4"><ProductCard/></div>
            </div>
        </div>
    )
}

export default HomeBody;