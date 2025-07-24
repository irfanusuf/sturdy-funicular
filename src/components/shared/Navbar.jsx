import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


    const [loading , setLoading] = useState(true)

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);


    useEffect(()=>{
        setTimeout(() => {
                 setLoading(false)
        }, 2000);
   
    })

    return (
        <>
           {loading && <div id="preloder">
                <div className="loader"></div>
            </div>}

            {/* Hamburger Overlay */}

            <div className={`humberger__menu__overlay ${menuOpen ? "active" : ""}`}
                onClick={closeMenu} ></div>

            {/* Hamburger Menu */}
            <div className={`humberger__menu__wrapper ${menuOpen ? "show__humberger__menu__wrapper" : ""}`}  >

                
                <div className="humberger__menu__logo">
                    <Link to="/">
                        <img src="img/logo.png" alt="Logo" />
                    </Link>
                </div>



                <div className="humberger__menu__cart">
                    <ul>
                        <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                        <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src="img/language.png" alt="" />
                        <div>English</div>
                        <span className="arrow_carrot-down"></span>
                        <ul>
                            <li><a href="#">Spanis</a></li>
                            <li><a href="#">English</a></li>
                        </ul>
                    </div>
                    <div className="header__top__right__auth">
                        <a href="#"><i className="fa fa-user"></i> Login</a>
                    </div>
                </div>



                <nav className="humberger__menu">
                    <ul>
                        <li className="active"><a href="./index.html">Home</a></li>
                        <li><a href="./shop-grid.html">Shop</a></li>
                        <li><a href="./shop-details.html">Shop Details</a></li>
                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                        <li><a href="./checkout.html">Check Out</a></li>
                        <li><a href="./blog-details.html">Blog Details</a></li>
                        <li><a href="./blog.html">Blog</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>


                <div id="mobile-menu-wrap"></div>
                <div className="header__top__right__social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>


            <header className="header">


                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope"></i> hello@organicKashmir.com</li>
                                        <li>Free Shipping for all Order of Rs 499/=</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <Link to="#"><i className="fa fa-facebook"></i></Link>
                                        <Link to="#"><i className="fa fa-twitter"></i></Link>
                                        <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                        <Link to="#"><i className="fa fa-pinterest-p"></i></Link>
                                    </div>
                                    <div className="header__top__right__language">
                                        <img src="img/language.png" alt="" />
                                        <div>English</div>

                                        <span className="arrow_carrot-down"></span>
                                        <ul>
                                            {/* <li><Link to="#">Sanskrit</Link></li> */}
                                            <li><Link to="#">English</Link></li>
                                        </ul>

                                    </div>
                                    <div className="header__top__right__auth">
                                        <Link to="#"><i className="fa fa-user"></i> Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="container">

                    <div className="row">

                        <div className="col-lg-3">
                            <div className="header__logo">
                                <Link to="./index.html"><img src="img/logo.png" alt="" /></Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>

                                    <li><Link to="/posts">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="">Delivery</Link>
                                        <ul className="header__menu__dropdown">
                                            <li><Link to="/user/cart">Shoping Cart</Link></li>
                                            <li><Link to="/user/checkout">Check Out</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><Link to="/user/wishlist"><i className="fa fa-heart"></i> <span>1</span></Link></li>
                                    <li><Link to="/user/cart"><i className="fa fa-shopping-bag"></i> <span>1</span></Link></li>
                                </ul>
                                <div className="header__cart__price">item: <span> Rs 150.00</span></div>
                            </div>
                        </div>
                    </div>


                    {/* Hamburger Icon */}
                    <div className="humberger__open" onClick={toggleMenu}>
                        <i className="fa fa-bars"></i>
                    </div>

                </div>
            </header>
        </>
    );
};

export default Navbar;
