import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const {id,img, price, description, name} = service;
    //url-3nd declore useNavigate
    const navigate = useNavigate();
    //url-2nd declore event handler
    const navigateToServiceDetail = id =>{
        //url-4th
        navigate(`/service/${id}`);


    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>Name:  {name}</h3>
            <h5>Price ${price}</h5>
            <p>{description}</p>
            <button onClick={()=>navigateToServiceDetail(id)}>Book: {name}</button>

        </div>
    );
};

export default Service;