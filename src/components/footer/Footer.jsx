import React from 'react'
import logo from '../../assets/logo.png'
import { Facebook, Instagram, Linkedin, Twitter, CreditCard, Paypal } from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <div>
            <footer class="my-footer pt-4">
                <div class="footer-top py-6 border-bottom mb-3" >
                    <div class="container">
                        <div class="row">
                            <div class="col-6 col-lg-4 my-3">
                                <div class="pb-3">
                                    <a href="">
                                        <img src={logo} alt="" style={{ height: "50px" }} />
                                    </a>
                                </div>
                                <address class="mb-4">
                                    <p class="mb-2">
                                        <a class="text-black nav-link" href=''>
                                            support@domain.com</a>
                                    </p>
                                    <p>
                                        <a class="text-black nav-link" href=''
                                        >820-885-3321</a>
                                    </p>
                                </address>
                                <div class="fs-5">
                                    <a class="me-3" href=''>
                                        <Facebook color='dark' />
                                    </a>
                                    <a class="me-3" href=''>
                                        <Instagram color='dark' />
                                    </a>
                                    <a class="me-3" href=''>
                                        <Twitter color='dark' />
                                    </a>
                                    <a class="me-3" href=''>
                                        <Linkedin color='dark' />
                                    </a>
                                </div>
                            </div>
                            <div class="col-6 col-lg-2 my-3">
                                <h6 class="text-black text-uppercase mb-5">Support</h6>
                                <ul class="list-unstyled">
                                    <li class="pb-2"><a class="text-black nav-link" href="">Help</a></li>
                                    <li class="pb-2"><a class="text-black nav-link" href="">Contact Us</a></li>
                                    <li class="pb-2"><a class="text-black nav-link" href="">Feedback</a></li>
                                    <li class="pb-2"><a class="text-black nav-link" href="">Unsubscribe</a></li>
                                    <li class="pb-2"><a class="text-black nav-link" href="">Reservations</a></li>

                                </ul>
                            </div>
                            <div class="col-6 col-lg-2 my-3">
                                <h6 class="text-black text-uppercase mb-5">POLICIES</h6>
                                <ul class="list-unstyled">
                                    <li class="pb-2"><a class="text-black nav-link" href="">Privacy Policy</a></li>
                                    <li class="pb-2"><a class="text-black nav-link" href="">Terms of use</a></li>
                                    <li class="pb-2"><a class="text-black nav-link" href="">Gift card and <br />
                                        conditions</a>
                                    </li>
                                    <li class="pb-2"><a class="text-black nav-link" href="">Shipping</a></li>
                                    <li class="pb-2"><a class="text-black nav-link" href="">Return</a></li>

                                </ul>
                            </div>
                            <div class="col-6 col-lg-4 my-3">
                                <h6 class="text-black text-uppercase mb-5">STAY UP TO DATE</h6>
                                <p class="text-black lead fw-light lh-sm">Aliquam erat volutpat. Nam dui mi, tincidunt quis,
                                    accumsan.</p>
                                <form>
                                    <div class="d-flex flex-column flex-md-row mb-2">
                                        <input type="email" class="rounded-0 form-control me-md-2 mb-2 mb-md-0"
                                            placeholder="Enter your email address" />
                                        <button class="rounded-0 btn btn-primary flex-shrink-0 text-white" type="submit">Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid d-flex justify-content-between ">
                    <div>
                        <p class="opacity-75">© 2023 Sundhu Sports | All Rights Reserved</p>
                    </div>

                    <div >
                        <i className='px-2 opacity-75'>
                            <CreditCard />
                        </i>
                        <i className='px-2 opacity-75'>
                            <Paypal />
                        </i>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer