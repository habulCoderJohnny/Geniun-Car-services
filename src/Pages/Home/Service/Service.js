import React from 'react';
import './Service.css';
const Service = ({service}) => {
    const {img, price, description, name} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>Name:  {name}</h3>
            <h5>Price ${price}</h5>
            <p>{description}</p>
            <button>Book {name}</button>

        </div>
    );
};

export default Service;