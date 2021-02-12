import React from 'react';
import pic from "../img/pizza.jpg"
const Menu = () => {
    return (
        <div className="menu">
            <div className="container">
                <div className="menu__text">
                    <div className="col-6">

                        <div className="menu__img">
                            <img src={pic} alt="" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>The Pizza Menu</h3>
                        <h1>CHICAGO THIN CRUST</h1>
                        <p>
                            Investigationes demonstraverunt lectores legere me lius quod ii
                            legunt saepius. Claritas est etiam processus dynaus, quise
                            sequitur mutationem consuetudium lectorum.
                              </p>
                        <div className="about__btn">
                            <a href="" className="btn btn-smart">
                                VIEW MORE
                           </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Menu;