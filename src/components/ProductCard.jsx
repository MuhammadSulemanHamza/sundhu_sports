import React from 'react'
import { Star, StarFill } from 'react-bootstrap-icons'


const ProductCard = () => {
    return (
        <div>
            <div class="card rounded shadow-sm border-0 my-2">
                <div class="card-body p-4">
                    <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg"
                        alt=""
                        class="img-fluid d-block mx-auto mb-3" />
                    <h5> <a href="#" class="text-dark text-decoration-none">Awesome product</a></h5>
                    <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <ul class="list-inline small">
                        <li class="list-inline-item mx-1"><StarFill color='gold' /></li>
                        <li class="list-inline-item mx-1"><StarFill color='gold' /></li>
                        <li class="list-inline-item mx-1"><StarFill color='gold' /></li>
                        <li class="list-inline-item mx-1"><StarFill color='gold' /></li>
                        <li class="list-inline-item mx-1"><StarFill /></li>
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