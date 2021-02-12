import React from 'react';
import pic1 from "../img/pizza1.png"
import pic2 from "../img/pizza2.png"
import pic3 from "../img/pizza3.png"
import pic4 from "../img/pizza4.png"
import pic5 from "../img/pizza5.png"
import pic6 from "../img/pizza6.png"
const Price = () => {
    const pizaaData = [{
        id: 1,
        image: pic1,
        name: "Pizza Margeritta",
        detail: "Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.",
        price: "50.00"
    },
    {
        id: 2,
        image: pic2,
        name: "Pizza Margeritta",
        detail: "Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.",
        price: "25.00"
    },
    {
        id: 3,
        image: pic3,
        name: "Pizza Margeritta",
        detail: "Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.",
        price: "150.00"
    },
    {
        id: 4,
        image: pic4,
        name: "Pizza Margeritta",
        detail: "Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.",
        price: "22.00"
    },
    {
        id: 5,
        image: pic5,
        name: "Pizza Margeritta",
        detail: "Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.",
        price: "36.00"
    },
    {
        id: 6,
        image: pic6,
        name: "Pizza Margeritta",
        detail: "Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.",
        price: "67.00"
    },
    ]
    return (
        <div className="prices">
            <div className="container">
                <div className="row">
                    {
                        pizaaData.map(data => (
                            <div className="col-4">
                                <div className="price">
                                    <div id={data.id}>

                                        <div className="price__img">
                                            <img src={data.image} alt="" />

                                        </div>
                                        <h1 className="price__heading">{data.name}</h1>
                                        <p className="price__detail">{data.detail}</p>
                                        <p className="price__rs">$ {data.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Price;