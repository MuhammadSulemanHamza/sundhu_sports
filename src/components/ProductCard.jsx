import React from 'react'
import { Star, StarFill } from 'react-bootstrap-icons'


const ProductCard = () => {
    return (
        <div className='p-2'>
            <div className="card rounded shadow-sm border-0 my-2" >
                <div className="card-body p-4">
                    <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg"
                        alt=""
                        className="img-fluid d-block mx-auto mb-3" />
                    <h5> <a href="#" className="text-dark text-decoration-none">Awesome product</a></h5>
                    <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <ul className="list-inline small">
                        <li className="list-inline-item mx-1"><StarFill color='gold' /></li>
                        <li className="list-inline-item mx-1"><StarFill color='gold' /></li>
                        <li className="list-inline-item mx-1"><StarFill color='gold' /></li>
                        <li className="list-inline-item mx-1"><StarFill color='gold' /></li>
                        <li className="list-inline-item mx-1"><StarFill /></li>
                    </ul>
                    <div className="btn btn-primary bg-primary px-6 py-2 text-white rounded">
                        Add to Cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard