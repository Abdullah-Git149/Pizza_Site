import React from 'react';
import logos from "../img/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__text">
                <div className="logo">
                    <img src={logos} alt="" />
                </div>
                <ul className="navbar__ul">
                    <li><a href="">Home</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact</a></li>    
                </ul>

            </div>

        </nav>
    );
};

export default Navbar;