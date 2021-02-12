import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner__content">
                <div className="container">
                    <div className="container__text">
                        <h3>PIZZA DELIVERY</h3>
                        <h1>MASETRO PIZZINO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Maiores sint temporibus ex
                         totam ratione nemo, </p>

                        <div className="banner__btn">
                            <a href="" className="btn btn-smart">DELIVERY NOW</a>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Header;